import { Injectable } from '@nestjs/common';
import { Central } from '@prisma/client';
import { PrismaService } from 'src/modules/database/services/prisma.service';
import { CreateCentralDto } from '../dto/create-central.dto';

@Injectable()
export class CentralRepository {
  constructor(private prisma: PrismaService) {}

  async create(central: CreateCentralDto): Promise<Central> {
    return this.prisma.central.create({
      data: {
        name: central.name,
        mac: central.mac,
        modelId: central.modelId,
      },
    });
  }
}
