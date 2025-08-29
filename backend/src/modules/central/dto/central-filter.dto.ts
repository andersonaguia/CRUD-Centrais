import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CentralFilterDto {
  @ApiPropertyOptional({ description: 'Filtrar por nome da central' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Filtrar por endereço MAC' })
  @IsOptional()
  @IsString()
  mac?: string;

  @ApiPropertyOptional({ description: 'Filtrar por ID do modelo' })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  modelId?: number;
}
