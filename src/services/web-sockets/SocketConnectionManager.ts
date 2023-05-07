import WebSocket, { WebSocketServer } from 'ws';
import { randomUUID } from 'crypto';
import { SocketMessageTypes } from './socket-messages/SocketMessageTypes';
import { IConnectionData } from './socket-messages/IConnectionData';
export class SocketConnectionManager {
  server!: WebSocket.Server;
  connections!: Map<string, WebSocket>;
  usernameClientMap!: Map<string, string>;

  public init() {
    // Create a new WebSocket server
    this.server = new WebSocketServer({ port: 8080 });
    console.log('WebSocket server started on port 8080');

    // Create a map to store active connections
    this.connections = new Map();
    this.usernameClientMap = new Map();

    // When a new client connects, add it to the map and assign a unique ID
    this.server.on('connection', (socket) => {
      const clientId = randomUUID();
      this.connections.set(clientId, socket);

      // When the client sends a message, broadcast it to all other clients
      socket.on('message', (message) => {
        const data = JSON.parse(message.toString());
        switch (data.type) {
          case SocketMessageTypes.CONNECTION:
            this.connectionMessage(clientId, data.data);
            break;
          default:
            console.log('Unknown message type');
            break;
        }
      });

      // When the client closes the connection, remove it from the map and log the event
      socket.on('close', () => {
        this.connections.delete(clientId);
        let username;
        this.usernameClientMap.forEach((value, key) => {
          if (value === clientId) {
            username = key;
            this.usernameClientMap.delete(key);
          }
        });

        console.log(`Client disconnected: ${username}`);
      });
    });
  }

  connectionMessage(clientId: string, data: IConnectionData) {
    const username = data.username;
    this.usernameClientMap.set(username, clientId);
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
