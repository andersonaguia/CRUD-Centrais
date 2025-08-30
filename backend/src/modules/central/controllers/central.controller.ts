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
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Messages } from 'src/common/messages';
import { CentralService } from '../services/central.service';
import { CreateCentralDto } from '../dto/create-central.dto';
import { CentralDataDto } from '../dto/central-data.dto';
import { PaginationDto } from '../dto/pagination.dto';
import { CentralFilterDto } from '../dto/central-filter.dto';
import { UpdateCentralDto } from '../dto/update-central.dto';

@ApiTags(Messages.Central.docs.API_TAG)
@Controller('/centrals')
export class CentralController {
  constructor(private readonly centralService: CentralService) {}

  @Get('count')
  @ApiOperation({
    summary: Messages.Central.docs.COUNT_SUMMARY,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: Messages.Central.http.OK,
    schema: {
      type: 'object',
      properties: {
        total: { type: 'number', example: 42 },
      },
    },
  })
  async count(): Promise<{ total: number }> {
    try {
      const total = await this.centralService.countAll();
      return { total };
    } catch (error) {
      throw new HttpException(
        Messages.Central.http.INTERNAL_SERVER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

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

  @Get()
  @ApiOperation({ summary: Messages.Central.docs.FIND_ALL_SUMMARY })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: Messages.default.pagination.PAGE_NUMBER,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: Messages.default.pagination.LIMIT_PER_PAGE,
  })
  @ApiQuery({
    name: 'name',
    required: false,
    type: String,
    description: Messages.default.pagination.FILTER_BY_NAME,
  })
  @ApiQuery({
    name: 'mac',
    required: false,
    type: String,
    description: Messages.Central.docs.FILTER_BY_MAC,
  })
  @ApiQuery({
    name: 'modelId',
    required: false,
    type: Number,
    description: Messages.Central.docs.FILTER_BY_MODEL_ID,
  })
  @ApiQuery({
    name: 'orderBy',
    required: false,
    type: String,
    description: Messages.default.pagination.ORDER_FIELDS,
  })
  @ApiQuery({
    name: 'sortOrder',
    required: false,
    enum: ['asc', 'desc'],
    description: Messages.default.pagination.ORDER,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: [CentralDataDto],
    description: Messages.Central.http.OK,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: Messages.Model.http.INTERNAL_SERVER_ERROR,
  })
  async findAll(
    @Query() paginationDto: PaginationDto,
    @Query() filterDto: CentralFilterDto,
  ): Promise<{ total: number; data: CentralDataDto[] }> {
    try {
      return await this.centralService.findAll(paginationDto, filterDto);
    } catch (error) {
      throw new HttpException(
        Messages.Central.http.INTERNAL_SERVER_ERROR,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  @ApiOperation({ summary: Messages.Central.docs.UPDATE_SUMMARY })
  @ApiParam({ name: 'id', example: 1 })
  @ApiResponse({
    status: HttpStatus.OK,
    type: CentralDataDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: Messages.Central.http.NOT_FOUND,
    example: `${Messages.Central.http.ID_NOT_FOUND_ERROR} 1`,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: Messages.Central.http.CONFLICT,
    example: `${Messages.Central.http.MAC_NOT_UNIQUE} ${Messages.Central.docs.MAC.example}`,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: Messages.Central.http.BAD_REQUEST,
    example: Messages.Central.validators.MAC.format,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: Messages.Central.http.INTERNAL_SERVER_ERROR,
  })
  async updateCentral(
    @Param('id') id: number,
    @Body() updateCentralDto: UpdateCentralDto,
  ): Promise<CentralDataDto> {
    try {
      return await this.centralService.update(+id, updateCentralDto);
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
