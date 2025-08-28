import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { DatabaseModule } from '../database/database.module';
import { ModelModule } from '../model/model.module';


@Module({
  imports: [DatabaseModule, ModelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
