import { Injectable } from '@nestjs/common';
import { ModelDto } from '../dto/model.dto';
import { ModelRepository } from '../repositories/model.repository';

@Injectable()
export class ModelService {
  constructor(private readonly modelRepository: ModelRepository) {}

  getAll(): Promise<ModelDto[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const models = await this.modelRepository.findAll();

        resolve(
          models.map((m) => ({
            id: m.id,
            name: m.name,
          })),
        );
      } catch (error) {
        reject(error);
      }
    });
  }
}
