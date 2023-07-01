import WebSocket, { WebSocketServer } from 'ws';
import { IConnectionData } from './socket-messages/IConnectionData';
import { MessageType } from './socket-messages/MessageType';
import { IReturnDriverLocationData } from './socket-messages/IReturnDriverLocationData';
import { User } from '../../entities/User';
import Config from '../../config/Config';
import { ISubscribeToDriverLocationData } from './socket-messages/ISubscribeToDriverLocationData';
import { MyWebSocket } from './MyWebSocket';
import { IRideDb } from '../../db/interface/IRideDb';
import { ICoordinatesDb } from '../../db/interface/ICoordinatesDb';
import rideModel from '../../db/model/RideModel';
import { Server } from 'http';
class SocketConnectionManager {
  server!: WebSocket.Server;
  connections!: Map<string, MyWebSocket>;
  constructor() {}

  public init(server: Server) {
    // Create a new WebSocket server
    this.server = new WebSocketServer({ server });
    console.log(`WebSocket server started ${(server.address() as any).port}...`);

    // Create a map to store active connections
    this.connections = new Map();

    this.server.on('connection', (socket: MyWebSocket) => {
      // When the client sends a message, broadcast it to all other clients
      socket._intervals = [];

      socket.on('message', (message) => {
        const data = JSON.parse(message.toString());
        console.log(
          `Received message from ${socket._username} | type: ${data.type} | ${
            data.data?.ride?._id ? `ride: ${data.data?.ride?._id}` : ''
          }`
        );
        switch (data.type) {
          case MessageType.Connection:
            this.connectionMessage(socket, data.data);
            break;
          case MessageType.ReturnDriverLocation:
            this.returnDriverLocationMessage(data.data);
            break;
          case MessageType.SubscribeToDriverLocation:
            this.pingDriverLocation(socket, data.data);
            break;
          case MessageType.ClearSubscriptions:
            this.clearIntervals(socket);
            break;
          case MessageType.SubscribeToLocationSharing:
            this.subscribeToLocationSharing(socket, data.data);
            break;
          case MessageType.ShareLocation:
            this.locationSharingMessage(data.data);
            break;
          default:
            console.log('Unknown message type', data.type);
            break;
        }
      });

      // When the client closes the connection, remove it from the map and log the event
      socket.on('close', () => {
        const username = socket._username;
        this.connections.delete(username);
        socket._intervals.forEach((interval) => clearInterval(interval));
        console.log(`Client disconnected: ${username}`);
      });
    });
  }

  async locationSharingMessage(data: { ride: IRideDb; location: ICoordinatesDb; username: string }) {
    const ride = data.ride;
    const usersLocation = data.location;
    const toCoordinates = ride.toCoordinates;

    if (
      (Number(usersLocation.latitude) < Number(toCoordinates.latitude) + Config.LOCATION_SHARING_RADIUS &&
        Number(usersLocation.latitude) > Number(toCoordinates.latitude) - Config.LOCATION_SHARING_RADIUS) ||
      (Number(usersLocation.longitude) < Number(toCoordinates.longitude) + Config.LOCATION_SHARING_RADIUS &&
        Number(usersLocation.longitude) > Number(toCoordinates.longitude) - Config.LOCATION_SHARING_RADIUS)
    ) {
      console.log('User has arrived at the destination', data.username);
      const isPassenger = data.username === ride.passenger.username;
      await rideModel.updatePassengerStats(ride._id, true, isPassenger);
    }
  }

  subscribeToLocationSharing(socket: MyWebSocket, data: { ride: IRideDb }) {
    const intervalId = setInterval(() => {
      socket.sendObject(MessageType.SubscribeToLocationSharing, data);
    }, Config.LOCATION_SHARING_PING_INTERVAL);

    socket._intervals.push(intervalId);
  }

  public getConnections(): Map<string, WebSocket> {
    return this.connections;
  }

  sendRideDeployed(usernames: string[], rideId: string, success: boolean): void {
    const sockets = usernames.map((username) => this.connections.get(username));

    sockets.forEach((socket) => {
      if (socket) {
        socket.sendObject(MessageType.RideDeployed, { rideId, success });
      }
    });
  }

  connectionMessage(socket: MyWebSocket, data: IConnectionData) {
    const username = data.username;
    this.connections.set(username, socket);
    socket._username = username;
    socket.sendObject = (type: MessageType, data?: any) => socket.send(JSON.stringify({ type, data }));
    console.log(`Client connected: ${username}`);
  }

  returnDriverLocationMessage(data: IReturnDriverLocationData) {
    const passengerUsername = data.ride.passenger.username;

    const passengerSocket = this.connections.get(passengerUsername);

    if (passengerSocket) {
      passengerSocket.sendObject(MessageType.ReturnDriverLocation, data);
    }
  }

  sendRideTimeout(ride: IRideDb): void {
    [ride.passenger.username, ride.driver.username].forEach((username) =>
      this.connections.get(username)?.sendObject(MessageType.RideTimeout, { ride })
    );
  }

  pingDriverLocation(socket: MyWebSocket, data: ISubscribeToDriverLocationData) {
    const driver = data.ride.driver as User;
    const intervalId = setInterval(async () => {
      socketConnectionManager.connections
        .get(driver.username)
        ?.sendObject(MessageType.ReturnDriverLocation, { ride: data.ride });
    }, Config.DRIVER_LOCATION_PING_INTERVAL);

    socket._intervals.push(intervalId);
  }

  clearIntervalsByUsernames(usernames: string[]) {
    usernames.forEach((username) => {
      const socket = this.connections.get(username);
      if (socket) {
        this.clearIntervals(socket);
      }
    });
  }

  clearIntervals(socket: MyWebSocket) {
    socket._intervals.forEach((interval) => clearInterval(interval));
    socket._intervals = [];
  }

  sendRideStarted(ride: IRideDb) {
    [ride.passenger.username, ride.driver.username].forEach((username) =>
      this.connections.get(username)?.sendObject(MessageType.RideStarted, { ride })
    );
  }

  broadcastMessage(senderUsername: string, type: MessageType, data: any) {
    this.connections.forEach((socket, username) => {
      if (username !== senderUsername) {
        socket.sendObject(type, data);
      }
    });
  }
}

export const socketConnectionManager = new SocketConnectionManager();
