import { prismaClient } from "../src/prisma-client";

describe("Test Auto Increment", () => {
  it("should be able to execute sql", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "Electronics",
      },
    });

    console.info(category);
    expect(category).toHaveProperty("id");
  });
});
