import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Messages } from 'src/common/messages';

@ApiTags(Messages.Central.docs.API_TAG)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: Messages.default.docs.HEALTH_CHECK_SUMMARY })
  @ApiResponse({
    status: HttpStatus.OK,
    description: Messages.Central.http.OK,
    schema: {
      type: 'string',
      example: Messages.Central.http.OK,
    },
  })
  @Get()
  healthCheck(): string {
    return this.appService.healthCheck();
  }
}
