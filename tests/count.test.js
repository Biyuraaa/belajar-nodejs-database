import { prismaClient } from "../src/prisma-client";

describe("Prisma Count", () => {
  it("should be able to count records", async () => {
    const total = await prismaClient.customer.count({
      where: {
        id: {
          contains: "Bimo",
        },
      },
    });
    expect(total).toBe(2);
  });
});
