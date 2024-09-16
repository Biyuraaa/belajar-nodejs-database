import { prismaClient } from "../src/prisma-client";

describe("Test Many to Many Prisma ORM", () => {
  // it("should to be able create many to many ", async () => {
  //   const likes = await prismaClient.like.create({
  //     data: {
  //       customer_id: "Bimo",
  //       product_id: "P001",
  //     },
  //     include: {
  //       customer: true,
  //       product: true,
  //     },
  //   });

  //   console.info(likes);
  // });

  it("should can find one with many to many relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "Bimo",
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });
    console.info(JSON.stringify(customer));
  });
  it("should can find many with many to many relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: "L",
              },
            },
          },
        },
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });
    console.info(JSON.stringify(customers));
  });
});
