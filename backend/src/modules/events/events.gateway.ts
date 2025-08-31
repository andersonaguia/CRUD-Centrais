import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  namespace: 'centrals',
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {}

  sendNewCentralNotification(message: string) {
    this.server.emit('newCentral', message); 
  }
}