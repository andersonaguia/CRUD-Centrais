import { HttpStatus, Injectable } from '@nestjs/common';
import { CentralRepository } from '../repositories/central.repository';
import { Central } from '@prisma/client';
import { CreateCentralDto } from '../dto/create-central.dto';
import { ModelService } from 'src/modules/model/services/model.service';
import { Messages } from 'src/common/messages';
import { CentralDataDto } from '../dto/central-data.dto';
import { ModelDto } from 'src/modules/model/dto/model.dto';
import { PaginationDto } from '../dto/pagination.dto';
import { CentralFilterDto } from '../dto/central-filter.dto';
import { UpdateCentralDto } from '../dto/update-central.dto';

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

  async deleteById(id: number): Promise<void> {
    const deleted = await this.centralRepository.deleteById(id);
  }

  async findAll(
    pagination: PaginationDto,
    filters: CentralFilterDto,
  ): Promise<{ data: CentralDataDto[]; total: number }> {
    const { page = 1, orderBy = 'id', sortOrder = 'asc' } = pagination;

    let { limit = 10 } = pagination;

    limit = limit > 100 ? 100 : limit;

    const skip = (page - 1) * limit;

    const centrals = await this.centralRepository.findAll(
      skip,
      limit,
      orderBy,
      sortOrder,
      filters,
    );
    const total = await this.centralRepository.countAll(filters);

    const mappedCentrals = centrals.map((central) => {
      const centralData = new CentralDataDto();
      centralData.id = central.id;
      centralData.name = central.name;
      centralData.mac = central.mac;

      const modelData = new ModelDto();
      modelData.id = central.model.id;
      modelData.name = central.model.name;
      centralData.model = modelData;

      return centralData;
    });

    return { data: mappedCentrals, total };
  }

  async update(id: number, updateCentralDto: UpdateCentralDto): Promise<CentralDataDto> {
    const existingCentral = await this.centralRepository.findOneById(id);
    if (!existingCentral) {
      throw {
        code: HttpStatus.NOT_FOUND,
        message: `${Messages.Central.http.ID_NOT_FOUND_ERROR} ${id}.`,
      };
    }

    if (updateCentralDto.modelId) {
      const model = await this.modelService.findOneById(updateCentralDto.modelId);
      if (!model) {
        throw {
          code: HttpStatus.NOT_FOUND,
          message: `${Messages.Model.http.ID_NOT_FOUND_ERROR} ${updateCentralDto.modelId}.`,
        };
      }
    }

    const updatedCentral = await this.centralRepository.update(id, updateCentralDto);

    const centralData = new CentralDataDto();
    centralData.id = updatedCentral.id;
    centralData.name = updatedCentral.name;
    centralData.mac = updatedCentral.mac;

    if (updatedCentral.model) { 
      const modelData = new ModelDto();
      modelData.id = updatedCentral.model.id;
      modelData.name = updatedCentral.model.name;
      centralData.model = modelData;
    } 

    return centralData;
  }

  async countAll(): Promise<number> {
    return this.centralRepository.countAll({});
  }
}
