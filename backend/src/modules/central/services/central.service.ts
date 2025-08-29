import { HttpStatus, Injectable } from '@nestjs/common';
import { CentralRepository } from '../repositories/central.repository';
import { Central } from '@prisma/client';
import { CreateCentralDto } from '../dto/create-central.dto';
import { ModelService } from 'src/modules/model/services/model.service';
import { Messages } from 'src/common/messages';

@Injectable()
export class CentralService {
  constructor(
    private readonly centralRepository: CentralRepository,
    private readonly modelService: ModelService,
  ) {}

  async create(newCentral: CreateCentralDto): Promise<Central> {
    const model = await this.modelService.findOneById(newCentral.modelId);

    if (!model) {
      throw {
        code: HttpStatus.NOT_FOUND,
        message: `${Messages.Model.http.ID_NOT_FOUND_ERROR} ${newCentral.modelId}.`,
      };
    }

    return this.centralRepository.create(newCentral);
  }
}
