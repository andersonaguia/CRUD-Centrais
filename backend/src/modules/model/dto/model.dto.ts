import { ApiProperty } from '@nestjs/swagger';
import { Messages } from 'src/common/messages';

export class ModelDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: Messages.Model.docs.CENTRAL_MODEL_NAME })
  name: string;
}
