import { prismaClient } from "../src/prisma-client";

describe("Prisma Create Select", () => {
  it("should be able to create and select records", async () => {
    const data = await prismaClient.customer.create({
      data: {
        id: "Fauzan1",
        name: "Fauzan1",
        email: "fauzan1@gmail.com",
        phone: "081234567894",
      },
      select: {
        id: true,
        name: true,
      },
    });

    console.log(data);
    expect(data.id).toBe("Fauzan1");
    expect(data.name).toBe("Fauzan1");
    expect(data.email).toBe(undefined);
    expect(data.phone).toBe(undefined);
  });
});
