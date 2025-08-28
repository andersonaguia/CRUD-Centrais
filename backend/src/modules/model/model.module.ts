import { Module } from '@nestjs/common';
import { ModelService } from './services/model.service';
import { ModelController } from './controllers/model.controller';
import { ModelRepository } from './repositories/model.repository';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ModelController],
  providers: [ModelService, ModelRepository],
})
export class ModelModule {}
