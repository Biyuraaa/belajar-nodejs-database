import { prismaClient } from "../src/prisma-client";

describe("Test One to Many", () => {
  // it("should be able to create one to many", async () => {
  //   const comment = await prismaClient.comment.create({
  //     data: {
  //       content: "Test Comment tipis cak",
  //       customer_id: "Biyuraa",
  //     },
  //     include: {
  //       customer: true,
  //     },
  //   });

  //   console.info(comment);
  // });

  // it("should be able to create many comments in customer", async () => {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       email: "ardisa@gmail.com",
  //       id: "ardisa",
  //       name: "Ardisa",
  //       phone: "089212345678",
  //       comments: {
  //         createMany: {
  //           data: [
  //             {
  //               content: "Test comment 1",
  //             },
  //             {
  //               content: "Test comment 2",
  //             },
  //             {
  //               content: "Test comment 3",
  //             },
  //           ],
  //         },
  //       },
  //     },
  //     include: {
  //       comments: true,
  //     },
  //   });

  //   console.info(customer);
  // });
  it("should be able to search customer where comments good", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            content: {
              contains: "good",
            },
          },
        },
      },
      include: {
        comments: true,
      },
    });
    console.info(JSON.stringify(customers, null, 2));
  });
});
