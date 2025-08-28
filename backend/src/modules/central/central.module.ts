import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CentralRepository } from './repositories/central.repository';
import { CentralController } from './controllers/central.controller';
import { CentralService } from './services/central.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CentralController],
  providers: [CentralService, CentralRepository],
})
export class CentralModule {}
