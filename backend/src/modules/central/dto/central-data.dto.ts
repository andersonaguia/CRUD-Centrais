import { ApiProperty } from '@nestjs/swagger';
import { Messages } from 'src/common/messages';
import { ModelDto } from 'src/modules/model/dto/model.dto';

export class CentralDataDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: Messages.Central.docs.NAME.example })
  name: string;

  @ApiProperty({
    example: Messages.Central.docs.MAC.example,
  })
  mac: string;

  @ApiProperty({ type: () => ModelDto })
  model: ModelDto;
}
