const add = (a, b) => a + b;
const generatingGreating = (name) => `Hello ${name}`;

// Variable from jest
// test(name, function) -> define a test case
// First parameter is a name
test('Should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('Should add name to a text', () => {
  const testName = 'oscar';
  const result = generatingGreating(testName);
  expect(result).toBe(`Hello ${testName}`);
});