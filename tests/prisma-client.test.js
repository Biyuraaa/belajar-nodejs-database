import { PrismaClient } from "@prisma/client";

describe("Prisma Client", () => {
  it("should be able to connect to the database", async () => {
    const prisma = new PrismaClient({
      errorFormat: "pretty",
      log: ["query", "info", "warn", "error"],
    });
    await prisma.$connect();
    await prisma.$disconnect();
  });
});
