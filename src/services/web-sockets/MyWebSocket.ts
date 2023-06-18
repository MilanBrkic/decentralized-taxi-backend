import { WebSocket } from 'ws';

// troll name
export type MyWebSocket = WebSocket & { _username: string; _intervals: NodeJS.Timeout[] };
