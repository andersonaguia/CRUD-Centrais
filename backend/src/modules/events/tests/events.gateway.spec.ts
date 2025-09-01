import { Test, TestingModule } from '@nestjs/testing';
import { EventsGateway } from '../events.gateway';
import { Server } from 'socket.io';
import { CentralActionNotificationDto } from '../dto/central-action-notification.dto';
import { Messages } from 'src/common/messages';

describe('EventsGateway', () => {
  let gateway: EventsGateway;
  let serverMock: Server;

  beforeEach(async () => {
    serverMock = {
      emit: jest.fn(),
    } as unknown as Server;

    const module: TestingModule = await Test.createTestingModule({
      providers: [EventsGateway],
    }).compile();

    gateway = module.get<EventsGateway>(EventsGateway);

    gateway.server = serverMock;
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  describe('sendCentralNotification', () => {
    it('should emit a "centralNotification" event with the given message', () => {
      const mockNotification: CentralActionNotificationDto = {
        message: Messages.Central.events.NEW_CENTRAL_AVAILABLE,
        totalCentrals: 15,
        centralId: 1,
      };

      gateway.sendCentralNotification(mockNotification);

      expect(gateway.server.emit).toHaveBeenCalledWith(
        'centralNotification',
        mockNotification,
      );
    });
  });
});
