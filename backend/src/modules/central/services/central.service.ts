import { Injectable } from '@nestjs/common';
import { CentralRepository } from '../repositories/central.repository';
import { Central } from '@prisma/client';
import { CreateCentralDto } from '../dto/create-central.dto';

@Injectable()
export class CentralService {
  constructor(private readonly centralRepository: CentralRepository) {}

  create(newCentral: CreateCentralDto): Promise<Central> {
    return new Promise(async (resolve, reject) => {
      try {
        const central = await this.centralRepository.create(newCentral);

        resolve(central);
      } catch (error) {
        reject(error);
      }
    });
  }
}
