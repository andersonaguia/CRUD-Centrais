import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { CentralActionNotificationDto } from './dto/central-action-notification.dto';

@WebSocketGateway({
  namespace: 'notifications',
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {}

  sendNewCentralNotification(notification: CentralActionNotificationDto) {
    this.server.emit('newCentral', notification);
  }

  sendRemovedCentralNotification(notification: CentralActionNotificationDto) {
    this.server.emit('removedCentral', notification);
  }
}
