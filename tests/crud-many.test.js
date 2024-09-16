import { prismaClient } from "../src/prisma-client";

describe("Prisma Many CRUD", () => {
  it("should be able to create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "Fauzan",
          name: "Fauzan",
          email: "fauzan@gmail.com",
          phone: "081234567890",
        },
        {
          id: "Rizal",
          name: "Rizal",
          email: "rizal@gmail.com",
          phone: "081234567891",
        },
      ],
    });
    expect(count).toBe(2);
  });
  it("should be able to update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        phone: "081234567892",
      },
      where: {
        id: "Rizal",
      },
    });
    expect(count).toBe(1);
  });
  it("should be able to delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        id: {
          in: ["Fauzan", "Rizal"],
        },
      },
    });
    expect(count).toBe(2);
  });

  it("should be able to read many records", async () => {
    const customers = await prismaClient.customer.findMany();
    expect(customers.length).toBe(4);
  });
});
