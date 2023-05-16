import WebSocket, { WebSocketServer } from 'ws';
import { SocketMessageTypes } from './socket-messages/SocketMessageTypes';
import { IConnectionData } from './socket-messages/IConnectionData';
import { MessageType } from './socket-messages/MessageType';
class SocketConnectionManager {
  server!: WebSocket.Server;
  connections!: Map<string, WebSocket>;
  constructor() {}

  public init() {
    // Create a new WebSocket server
    this.server = new WebSocketServer({ port: 8080 });
    console.log('WebSocket server started on port 8080');

    // Create a map to store active connections
    this.connections = new Map();

    // When a new client connects, add it to the map and assign a unique ID
    this.server.on('connection', (socket: WebSocket.WebSocket) => {
      // When the client sends a message, broadcast it to all other clients
      socket.on('message', (message) => {
        const data = JSON.parse(message.toString());
        switch (data.type) {
          case SocketMessageTypes.CONNECTION:
            this.connectionMessage(socket, data.data);
            break;
          default:
            console.log('Unknown message type');
            break;
        }
      });

      // When the client closes the connection, remove it from the map and log the event
      socket.on('close', () => {
        const username = (socket as any)._username;
        this.connections.delete(username);
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

  connectionMessage(socket: WebSocket.WebSocket, data: IConnectionData) {
    const username = data.username;
    this.connections.set(username, socket);
    (socket as any)._username = username;
    console.log(`Client connected: ${username}`);
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
