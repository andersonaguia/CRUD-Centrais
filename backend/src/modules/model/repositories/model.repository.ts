import { Injectable } from '@nestjs/common';
import { Model } from '@prisma/client';
import { PrismaService } from 'src/modules/database/services/prisma.service';

@Injectable()
export class ModelRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Model[]> {
    return this.prisma.model.findMany();
  }

  async findOneById(id: number): Promise<Model | null> {
    return this.prisma.model.findUnique({ where: { id: id } });
  }
}
