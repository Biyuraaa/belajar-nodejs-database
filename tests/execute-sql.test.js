import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to execute sql", async () => {
    const id = "Biyuraaa";
    const name = "M Bimo Bayu Bagaskara";
    const impacted =
      await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES (${id}, ${name})`;

    expect(impacted).toBe(1);
  });
});
