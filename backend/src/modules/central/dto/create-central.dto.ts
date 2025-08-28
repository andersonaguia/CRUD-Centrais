import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Messages } from 'src/common/messages';

export class CreateCentralDto {
  @ApiProperty({
    example: Messages.Central.docs.NAME.example,
    description: Messages.Central.docs.NAME.description,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: Messages.Central.docs.MAC.example,
    description: Messages.Central.docs.MAC.description,
  })
  @IsString()
  @IsNotEmpty()
  mac: string;

  @ApiProperty({
    example: Messages.Central.docs.MODEL_ID.example,
    description: Messages.Central.docs.MODEL_ID.description,
  })
  @IsInt()
  modelId: number;
}
