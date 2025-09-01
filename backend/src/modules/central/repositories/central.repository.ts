import { HttpStatus, Injectable } from '@nestjs/common';
import { Central, Prisma } from '@prisma/client';
import { PrismaService } from 'src/modules/database/services/prisma.service';
import { CreateCentralDto } from '../dto/create-central.dto';
import { Messages } from 'src/common/messages';
import { CentralFilterDto } from '../dto/central-filter.dto';
import { CentralWithModel } from '../types/central.type';
import { UpdateCentralDto } from '../dto/update-central.dto';

@Injectable()
export class CentralRepository {
  constructor(private prisma: PrismaService) {}

  async create(central: CreateCentralDto): Promise<Central> {
    try {
      return await this.prisma.central.create({
        data: {
          name: central.name,
          mac: central.mac,
          modelId: central.modelId,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw {
            code: HttpStatus.CONFLICT,
            message: `${Messages.Central.http.MAC_NOT_UNIQUE} ${central.mac}`,
          };
        }
      }
      throw error;
    }
  }

  async findOneById(id: number) {
    return await this.prisma.central.findFirst({
      where: { id, deletedAt: null },
      include: { model: { select: { name: true } } },
    });
  }

  async deleteById(id: number): Promise<Central> {
    try {
      return await this.prisma.central.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw {
            code: HttpStatus.NOT_FOUND,
            message: `${Messages.Central.http.ID_NOT_FOUND_ERROR} ${id}`,
          };
        }
      }
      throw error;
    }
  }

  async findAll(
    skip: number,
    take: number,
    orderBy: string,
    sortOrder: string,
    filters: CentralFilterDto,
  ): Promise<CentralWithModel[]> {
    const where: Prisma.CentralWhereInput = {
      deletedAt: null,
    };

    if (filters.name) {
      where.name = { contains: filters.name };
    }
    if (filters.mac) {
      where.mac = { contains: filters.mac };
    }
    if (filters.modelId) {
      where.modelId = filters.modelId;
    }

    const orderByClause: Prisma.CentralOrderByWithRelationInput = {};
    if (orderBy) {
      orderByClause[orderBy] = sortOrder;
    } else {
      orderByClause.id = 'asc';
    }

    return await this.prisma.central.findMany({
      skip,
      take,
      where,
      orderBy: orderByClause,
      include: {
        model: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async countAll(filters: CentralFilterDto): Promise<number> {
    const where: Prisma.CentralWhereInput = {
      deletedAt: null,
    };

    if (filters.name) {
      where.name = { contains: filters.name };
    }
    if (filters.mac) {
      where.mac = { contains: filters.mac };
    }
    if (filters.modelId) {
      where.modelId = filters.modelId;
    }

    return await this.prisma.central.count({ where });
  }

  async update(id: number, data: UpdateCentralDto): Promise<CentralWithModel> {
    try {
      return await this.prisma.central.update({
        where: { id },
        data: {
          name: data.name,
          mac: data.mac,
          modelId: data.modelId,
          updatedAt: new Date(),
        },
        include: { model: { select: { id: true, name: true } } },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw {
            code: HttpStatus.CONFLICT,
            message: `${Messages.Central.http.MAC_NOT_UNIQUE} ${data.mac}`,
          };
        }
        if (error.code === 'P2025') {
          throw {
            code: HttpStatus.NOT_FOUND,
            message: `${Messages.Central.http.ID_NOT_FOUND_ERROR} ${id}`,
          };
        }
      }
      throw error;
    }
  }
}
