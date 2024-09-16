import { prismaClient } from "../src/prisma-client";

describe("Prisma ORM Group by", () => {
  it("should be able query using aggregate and group by", async () => {
    const items = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _avg: {
        price: true,
      },
    });

    for (const item of items) {
      console.info(
        `Category : ${item.category}, min : ${item._min.price}, max : ${item._max.price}, average : ${item._avg.price}`
      );
    }
  });
  it("should be able query using aggregate, having, and group by", async () => {
    const items = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _avg: {
        price: true,
      },
      having: {
        price: {
          _avg: {
            gt: 1000000,
          },
        },
      },
    });

    for (const item of items) {
      console.info(
        `Category : ${item.category}, min : ${item._min.price}, max : ${item._max.price}, average : ${item._avg.price}`
      );
    }
  });
});
