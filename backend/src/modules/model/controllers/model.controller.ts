import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { ModelDto } from '../dto/model.dto';
import { ModelService } from '../services/model.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Messages } from 'src/common/messages';

@ApiTags(Messages.Model.docs.API_TAG)
@Controller('/models')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Get()
  @ApiOperation({ summary: Messages.Model.docs.SUMMARY })
  @ApiResponse({
    status: HttpStatus.OK,
    type: [ModelDto],
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: Messages.Model.http.INTERNAL_SERVER_ERROR,
  })
  async getAll(): Promise<ModelDto[]> {
    try {
      return await this.modelService.getAll();
    } catch (error) {
      throw new HttpException(
        Messages.Model.http.INTERNAL_SERVER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
