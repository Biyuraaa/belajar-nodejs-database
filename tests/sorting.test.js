import { prismaClient } from "../src/prisma-client";

describe("Prisma Sortinng", () => {
  it("should be able to sorting records", async () => {
    const page1 = await prismaClient.customer.findMany({
      take: 3,
      skip: 0,
      orderBy: [
        {
          id: "asc",
        },
        {
          name: "desc",
        },
      ],
    });
    expect(page1.length).toBe(3);
    console.log(page1);
  });
});
