import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { Messages } from 'src/common/messages';

export class CreateCentralDto {
  @ApiProperty({
    example: Messages.Central.docs.NAME.example,
    description: Messages.Central.docs.NAME.description,
  })
  @IsString({ message: Messages.Central.validators.NAME.type })
  @IsNotEmpty({ message: Messages.Central.validators.NAME.required })
  name: string;

  @ApiProperty({
    example: Messages.Central.docs.MAC.example,
    description: Messages.Central.docs.MAC.description,
  })
  @IsString({ message: Messages.Central.validators.MAC.type })
  @IsNotEmpty({ message: Messages.Central.validators.MAC.required })
  mac: string;

  @ApiProperty({
    example: Messages.Central.docs.MODEL_ID.example,
    description: Messages.Central.docs.MODEL_ID.description,
  })
  @IsInt({ message: Messages.Central.validators.MODEL_ID.type })
  @IsNotEmpty({ message: Messages.Central.validators.MODEL_ID.required })
  modelId: number;
}
