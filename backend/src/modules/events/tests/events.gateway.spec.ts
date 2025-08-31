import { Test, TestingModule } from '@nestjs/testing';
import { EventsGateway } from '../events.gateway';
import { Server } from 'socket.io';

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

  describe('sendNewCentralNotification', () => {
    it('should emit a "newCentral" event with the given message', () => {
      const message = 'Nova central disponível';
      
      gateway.sendNewCentralNotification(message);

      expect(gateway.server.emit).toHaveBeenCalledWith('newCentral', message);
    });
  });
});
