import { prismaClient } from "../src/prisma-client";

describe("Prisma Aggregate Function", () => {
  it("should be able to query using aggreagte", async () => {
    const result = await prismaClient.product.aggregate({
      _min: {
        price: true,
        stock: true,
      },
      _max: {
        price: true,
      },
      _sum: {
        price: true,
      },
      _avg: {
        price: true,
      },
    });

    console.log(result);
  });
});
