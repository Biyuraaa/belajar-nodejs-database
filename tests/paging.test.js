import { prismaClient } from "../src/prisma-client";

describe("Prisma Paging", () => {
  it("should be able to paginate records", async () => {
    const page1 = await prismaClient.customer.findMany({
      take: 2,
      skip: 0,
    });
    expect(page1.length).toBe(2);
    console.log(page1);
    const page2 = await prismaClient.customer.findMany({
      take: 2,
      skip: 2,
    });
    expect(page2.length).toBe(2);
    console.log(page2);
  });
});
