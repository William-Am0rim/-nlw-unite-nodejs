import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ["query"] // mostra log ai receber uma query
});