import { Prisma } from '@prisma/client';

export const centralWithModel = Prisma.validator<Prisma.CentralDefaultArgs>()({
  include: { model: { select: { id: true, name: true } } },
});

export type CentralWithModel = Prisma.CentralGetPayload<typeof centralWithModel>;
