import { PartialType } from '@nestjs/swagger';
import { CreateCentralDto } from './create-central.dto';

export class UpdateCentralDto extends PartialType(CreateCentralDto) {}
