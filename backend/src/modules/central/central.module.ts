import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CentralRepository } from './repositories/central.repository';
import { CentralController } from './controllers/central.controller';
import { CentralService } from './services/central.service';
import { ModelModule } from '../model/model.module';

@Module({
  imports: [DatabaseModule, ModelModule],
  controllers: [CentralController],
  providers: [CentralService, CentralRepository],
})
export class CentralModule {}
