import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export const db = prisma;

// production olmadığında Prisma client çalışır halde olursa
// server'ı her yeniden başlattığımızda Prisma tekrar tekrar başlatılmayacak