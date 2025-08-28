// src/model/repositories/model.repository.ts
import { Injectable } from '@nestjs/common';
import { Model } from '@prisma/client';
import { PrismaService } from 'src/modules/database/services/prisma.service';

@Injectable()
export class ModelRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Model[]> {
    return this.prisma.model.findMany();
  }
}
