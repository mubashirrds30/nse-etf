import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

declare function prismaClientSingleton(): PrismaClient;
