import { WebSocketServer, WebSocket } from 'ws';

export function initWebSocketServer() {
  const wss = new WebSocketServer({ port: 5050 });
  wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });
    ws.send('something');
    console.log('connection established');
  });

  return wss;
}
