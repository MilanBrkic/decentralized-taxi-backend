import { WebSocket } from 'ws';
import { MessageType } from './socket-messages/MessageType';

// troll name
export type MyWebSocket = WebSocket & {
  _username: string;
  _intervals: NodeJS.Timeout[];
  sendObject: (type: MessageType, data?: any) => void;
};
