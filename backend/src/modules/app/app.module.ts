import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { DatabaseModule } from '../database/database.module';
import { ModelModule } from '../model/model.module';
import { CentralModule } from '../central/central.module';
import { EventsModule } from '../events/events.module';

@Module({
  imports: [DatabaseModule, ModelModule, CentralModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
