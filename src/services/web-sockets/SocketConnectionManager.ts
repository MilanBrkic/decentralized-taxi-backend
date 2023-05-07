import WebSocket, { WebSocketServer } from 'ws';
import { SocketMessageTypes } from './socket-messages/SocketMessageTypes';
import { IConnectionData } from './socket-messages/IConnectionData';
export class SocketConnectionManager {
  server!: WebSocket.Server;
  connections!: Map<string, WebSocket>;

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
        let username;
        this.connections.forEach((value, key) => {
          if (value === socket) {
            username = key;
            this.connections.delete(key);
          }
        });

        console.log(`Client disconnected: ${username}`);
      });
    });
  }

  connectionMessage(socket: WebSocket.WebSocket, data: IConnectionData) {
    const username = data.username;
    this.connections.set(username, socket);
    console.log(`Client connected: ${username}`);
  }

  broadcastMessage(senderId: string, message: any) {
    this.connections.forEach((socket, clientId) => {
      if (clientId !== senderId) {
        socket.send(message);
      }
    });
  }
}

export const socketConnectionManager = new SocketConnectionManager();