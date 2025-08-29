import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Messages } from 'src/common/messages';
import { CentralService } from '../services/central.service';
import { CreateCentralDto } from '../dto/create-central.dto';
import { CentralDataDto } from '../dto/central-data.dto';

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

  @Get(':id')
  @ApiOperation({ summary: Messages.Central.docs.FIND_ONE_SUMMARY })
  @ApiParam({ name: 'id', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    type: CentralDataDto,
    description: Messages.Central.http.OK,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: Messages.Central.http.NOT_FOUND,
    example: `${Messages.Central.http.ID_NOT_FOUND_ERROR} 1`,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: Messages.Model.http.INTERNAL_SERVER_ERROR,
  })
  async findOne(@Param('id') id: number): Promise<CentralDataDto> {
    try {
      return await this.centralService.findOneById(+id);
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

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: Messages.Central.docs.DELETE_SUMMARY })
  @ApiParam({ name: 'id', example: 1 })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: Messages.Central.http.NO_CONTENT,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: Messages.Central.http.NOT_FOUND,
    example: `${Messages.Central.http.ID_NOT_FOUND_ERROR} 1`,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: Messages.Central.http.INTERNAL_SERVER_ERROR,
    example: Messages.Central.http.DELETE_INTERNAL_SERVER_ERROR,
  })
  async deleteById(@Param('id') id: number): Promise<void> {
    try {
      await this.centralService.deleteById(+id);
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
