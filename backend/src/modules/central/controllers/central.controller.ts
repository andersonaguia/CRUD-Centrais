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
import { Central } from '@prisma/client';

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
    status: HttpStatus.NOT_FOUND,
    description: Messages.Model.http.NOT_FOUND,
    example: `${Messages.Model.http.ID_NOT_FOUND_ERROR} ${Messages.Central.docs.MODEL_ID.example}`,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: Messages.Central.http.CONFLICT,
    example: `${Messages.Central.http.MAC_NOT_UNIQUE} ${Messages.Central.docs.MAC.example}`,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: Messages.Central.http.BAD_REQUEST,
    example: Messages.Central.validators.MAC.required,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: Messages.Model.http.INTERNAL_SERVER_ERROR,
  })
  async createCentral(
    @Body() createCentralDto: CreateCentralDto,
  ): Promise<CreateCentralDto> {
    try {
      return await this.centralService.create(createCentralDto);
    } catch (error) {
      if (error.code && error.message) {
        throw new HttpException(error.message, error.code);
      }
      throw new HttpException(
        Messages.Central.http.INTERNAL_SERVER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
