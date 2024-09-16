import { prismaClient } from "../src/prisma-client";

describe("Prisma Transaction", () => {
  // it("should execute sequential transaction", async () => {
  //   const [bimo, biyura] = await prismaClient.$transaction([
  //     prismaClient.customer.create({
  //       data: {
  //         id: "Bimo",
  //         name: "M Bimo Bayu Bagaskara",
  //         email: "m.bimo.bayu.bagaskara-2022@fst.unair.ac.id",
  //         phone: "082140477030",
  //       },
  //     }),
  //     prismaClient.customer.create({
  //       data: {
  //         id: "Biyura",
  //         name: "Biyuraaa",
  //         email: "biyurasan@gmail.com",
  //         phone: "089601135249",
  //       },
  //     }),
  //   ]);

  //   expect(bimo.id).toBe("Bimo");
  //   expect(bimo.name).toBe("M Bimo Bayu Bagaskara");
  //   expect(bimo.email).toBe("m.bimo.bayu.bagaskara-2022@fst.unair.ac.id");
  //   expect(bimo.phone).toBe("082140477030");
  //   expect(biyura.id).toBe("Biyura");
  //   expect(biyura.name).toBe("Biyuraaa");
  //   expect(biyura.email).toBe("biyurasan@gmail.com");
  //   expect(biyura.phone).toBe("089601135249");
  // });

  it("should execute interactive transaction", async () => {
    const result = await prismaClient.$transaction(async (prisma) => {
      const bimo = await prisma.customer.create({
        data: {
          id: "Bimoo",
          name: "M Bimo Bayu Bagaskara",
          email: "m.bimo.bayu.bagaskara@gmail.com",
          phone: "082140477031",
        },
      });

      const biyura = await prisma.customer.create({
        data: {
          id: "Biyuraa",
          name: "Biyuraaa",
          email: "biyuraaa@gmail.com",
          phone: "089601135240",
        },
      });

      return [bimo, biyura]; // Return both bimo and biyura
    });

    const [bimo, biyura] = result;

    expect(bimo.id).toBe("Bimoo");
    expect(bimo.name).toBe("M Bimo Bayu Bagaskara");
    expect(bimo.email).toBe("m.bimo.bayu.bagaskara@gmail.com");
    expect(bimo.phone).toBe("082140477031");
    expect(biyura.id).toBe("Biyuraa");
    expect(biyura.name).toBe("Biyuraaa");
    expect(biyura.email).toBe("biyuraaa@gmail.com");
    expect(biyura.phone).toBe("089601135240");
  });
});
