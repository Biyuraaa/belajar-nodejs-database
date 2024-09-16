import { prismaClient } from "../src/prisma-client";

describe("Test One To One", () => {
  // it("should to be create wallets with customer", async () => {
  //   const wallet = await prismaClient.wallet.create({
  //     data: {
  //       id: "Biyuraa",
  //       customer_id: "Biyuraa",
  //       balance: 1000000,
  //     },
  //     include: {
  //       customer: true,
  //     },
  //   });
  //   console.info(wallet.customer.email);
  // });
  // it("should to be create one to one with relation", async () => {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       id: "arya",
  //       name: "Arya",
  //       email: "arya@gmail.com",
  //       phone: "089612345678",
  //       wallet: {
  //         create: {
  //           id: "arya",
  //           balance: 80000,
  //         },
  //       },
  //     },
  //     include: {
  //       wallet: true,
  //     },
  //   });
  //   console.info(customer);
  // });
  it("should to be able to find one to one", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "biyura",
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("should be able fo tind one to one with include", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });

    for (const customer of customers) {
      console.info(customer);
    }
  });
});
