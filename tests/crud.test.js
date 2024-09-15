import { prismaClient } from "../src/prisma-client";

describe("Prisma CRUD", () => {
  // it("should be able to create customer", async () => {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       id: "Biyuraaa",
  //       name: "M Bimo Bayu Bagaskara",
  //       email: "m.bimo.bayu.bagaskara-2022@fst.unair.ac.id",
  //       phone: "082140477030",
  //     },
  //   });

  //   expect(customer.id).toBe("Biyuraaa");
  //   expect(customer.name).toBe("M Bimo Bayu Bagaskara");
  //   expect(customer.email).toBe("m.bimo.bayu.bagaskara-2022@fst.unair.ac.id");
  //   expect(customer.phone).toBe("082140477030");
  // });
  // it("should be able to update customer", async () => {
  //   const customer = await prismaClient.customer.update({
  //     data: {
  //       id: "Biyura",
  //       email: "biyurasan@gmail.com",
  //     },
  //     where: {
  //       id: "Biyuraaa",
  //     },
  //   });
  //   expect(customer.id).toBe("Biyura");
  //   expect(customer.email).toBe("biyurasan@gmail.com");
  // });

  it("should be able to read customer", async () => {
    const data = await prismaClient.customer.findUnique({
      where: {
        id: "Biyura",
      },
    });
    expect(data.id).toBe("Biyura");
    expect(data.name).toBe("M Bimo Bayu Bagaskara");
    expect(data.email).toBe("biyurasan@gmail.com");
    expect(data.phone).toBe("082140477030");
  });

  it("should be able to delete customer", async () => {
    const data = await prismaClient.customer.delete({
      where: {
        id: "Biyura",
      },
    });

    expect(data.id).toBe("Biyura");
    expect(data.name).toBe("M Bimo Bayu Bagaskara");
    expect(data.email).toBe("biyurasan@gmail.com");
    expect(data.phone).toBe("082140477030");
  });
});
