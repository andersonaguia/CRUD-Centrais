import { HttpStatus, Injectable } from '@nestjs/common';
import { CentralRepository } from '../repositories/central.repository';
import { Central } from '@prisma/client';
import { CreateCentralDto } from '../dto/create-central.dto';
import { ModelService } from 'src/modules/model/services/model.service';
import { Messages } from 'src/common/messages';
import { CentralDataDto } from '../dto/central-data.dto';
import { ModelDto } from 'src/modules/model/dto/model.dto';

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

  async findOneById(id: number): Promise<CentralDataDto> {
    const central = await this.centralRepository.findOneById(id);

    if (!central) {
      throw {
        code: HttpStatus.NOT_FOUND,
        message: `${Messages.Central.http.ID_NOT_FOUND_ERROR} ${id}.`,
      };
    }

    const centralData = new CentralDataDto();
    centralData.id = central.id;
    centralData.name = central.name;
    centralData.mac = central.mac;

    const modelData = new ModelDto();
    modelData.id = central.modelId;
    modelData.name = central.model.name;

    centralData.model = modelData;

    return centralData;
  }
}
