import { HttpStatus, Injectable } from '@nestjs/common';
import { Central, Prisma } from '@prisma/client';
import { PrismaService } from 'src/modules/database/services/prisma.service';
import { CreateCentralDto } from '../dto/create-central.dto';
import { Messages } from 'src/common/messages';

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
    return await this.prisma.central.findUnique({
      where: { id },
      include: { model: { select: { name: true } } },
    });
  }
}
