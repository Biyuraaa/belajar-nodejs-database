const tagFunction = (array, ...args) => {
  console.log(array);
  console.log(args);
};

test("Tag function", () => {
  const name = "M Bimo Bayu Bagaskara";

  tagFunction`Hello, my name is ${name}`;
  tagFunction`Hello, my name is ${name} and I'm ${24} years old`;
});

test("Test Tag function sql", () => {
  const name = "M Bimo Bayu Bagaskara";
  const nim = "187221049";

  tagFunction`SELECT * FROM USERS WHERE name = ${name} AND nim = ${nim}`;
});
