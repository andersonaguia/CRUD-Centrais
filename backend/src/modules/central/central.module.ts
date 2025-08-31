import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CentralRepository } from './repositories/central.repository';
import { CentralController } from './controllers/central.controller';
import { CentralService } from './services/central.service';
import { ModelModule } from '../model/model.module';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [DatabaseModule, ModelModule, EventsModule],
  controllers: [CentralController],
  providers: [CentralService, CentralRepository],
})
export class CentralModule {}
