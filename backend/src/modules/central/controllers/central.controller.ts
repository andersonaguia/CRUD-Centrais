import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Messages } from 'src/common/messages';
import { CentralService } from '../services/central.service';
import { CreateCentralDto } from '../dto/create-central.dto';

@ApiTags(Messages.Central.docs.API_TAG)
@Controller('/centrals')
export class CentralController {
  constructor(private readonly centralService: CentralService) {}

  @Post()
  @ApiOperation({ summary: Messages.Central.docs.CREATE_SUMMARY })
  @ApiResponse({
    status: HttpStatus.CREATED, 
    type: CreateCentralDto, 
    description: Messages.Central.http.CREATED_SUCCESS,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: Messages.Central.http.INTERNAL_SERVER_ERROR,
  })
  async createCentral(
    @Body() createCentralDto: CreateCentralDto,
  ): Promise<CreateCentralDto> {
    try {
      return await this.centralService.create(createCentralDto);
    } catch (error) {
      throw new HttpException(
        Messages.Central.http.INTERNAL_SERVER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
