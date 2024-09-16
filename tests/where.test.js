import { prismaClient } from "../src/prisma-client";

describe("Test Where Prisma ORM", () => {
  it("should can using or operator", async () => {
    const products = await prismaClient.product.findMany({
      where: {
        OR: [
          {
            category: "Accessories",
          },
          {
            price: {
              gt: 5000000,
            },
          },
        ],
      },
    });

    for (const product of products) {
      console.info(
        `Name : ${product.name}, Price : ${product.price}, Stock : ${product.stock}, Category : ${product.category}`
      );
    }
  });
});
