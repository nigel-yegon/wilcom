import postgres from '@prisma/orm-postgres/runtime'
import { contract } from './contract' // emitted from prisma/contract.prisma

export const db = postgres({
  contract,
  connection: process.env.DATABASE_URL!,
})