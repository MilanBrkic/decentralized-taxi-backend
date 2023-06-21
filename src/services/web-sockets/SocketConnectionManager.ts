import WebSocket, { WebSocketServer } from 'ws';
import { IConnectionData } from './socket-messages/IConnectionData';
import { MessageType } from './socket-messages/MessageType';
import { IReturnDriverLocationData } from './socket-messages/IReturnDriverLocationData';
import { User } from '../../entities/User';
import Config from '../../config/Config';
import { ISubscribeToDriverLocationData } from './socket-messages/ISubscribeToDriverLocationData';
import { MyWebSocket } from './MyWebSocket';
import { IRideDb } from '../../db/interface/IRideDb';
class SocketConnectionManager {
  server!: WebSocket.Server;
  connections!: Map<string, MyWebSocket>;
  constructor() {}

  public init() {
    // Create a new WebSocket server
    this.server = new WebSocketServer({ port: 8080 });
    console.log('WebSocket server started on port 8080');

    // Create a map to store active connections
    this.connections = new Map();

    // When a new client connects, add it to the map and assign a unique ID
    this.server.on('connection', (socket: MyWebSocket) => {
      socket._intervals = [];
      // When the client sends a message, broadcast it to all other clients
      socket.on('message', (message) => {
        const data = JSON.parse(message.toString());
        console.log(`Received message from ${socket._username} | type: ${data.type}`);
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
          case MessageType.UnsubscribeToDriverLocation:
            this.unsubFromDriverLocation(data.data);
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

  public getConnections(): Map<string, WebSocket> {
    return this.connections;
  }

  sendRideDeployed(usernames: string[], rideId: string, success: boolean): void {
    const sockets = usernames.map((username) => this.connections.get(username));

    sockets.forEach((socket) => {
      if (socket) {
        socket.send(JSON.stringify({ type: MessageType.RideDeployed, data: { rideId, success } }));
      }
    });
  }

  connectionMessage(socket: MyWebSocket, data: IConnectionData) {
    const username = data.username;
    this.connections.set(username, socket);
    (socket as any)._username = username;
    console.log(`Client connected: ${username}`);
  }

  returnDriverLocationMessage(data: IReturnDriverLocationData) {
    const passengerUsername = data.ride.passenger.username;

    const passengerSocket = this.connections.get(passengerUsername);

    if (passengerSocket) {
      passengerSocket.send(JSON.stringify({ type: MessageType.ReturnDriverLocation, data }));
    }
  }

  sendRideTimeout(ride: IRideDb): void {
    [ride.passenger.username, ride.driver.username].forEach((username) =>
      this.connections.get(username)?.send(JSON.stringify({ type: MessageType.RideTimeout, data: { ride } }))
    );
  }

  pingDriverLocation(socket: MyWebSocket, data: ISubscribeToDriverLocationData) {
    const driver = data.ride.driver as User;
    const intervalId = setInterval(async () => {
      socketConnectionManager.connections
        .get(driver.username)
        ?.send(JSON.stringify({ type: MessageType.ReturnDriverLocation, data: { ride: data.ride } }));
    }, Config.DRIVER_LOCATION_PING_INTERVAL);

    socket._intervals.push(intervalId);
  }

  unsubFromDriverLocation(data: { ride: IRideDb }) {
    const driver = data.ride.driver as User;
    const socketToUnsub = socketConnectionManager.connections.get(driver.username);
    if (socketToUnsub) {
      socketToUnsub._intervals.forEach((interval) => clearInterval(interval));
    }
  }

  sendRideStarted(ride: IRideDb) {
    [ride.passenger.username, ride.driver.username].forEach((username) =>
      this.connections.get(username)?.send(JSON.stringify({ type: MessageType.RideStarted, data: { ride } }))
    );
  }

  broadcastMessage(senderUsername: string, message: any) {
    this.connections.forEach((socket, username) => {
      if (username !== senderUsername) {
        socket.send(JSON.stringify(message));
      }
    });
  }
}

export const socketConnectionManager = new SocketConnectionManager();
