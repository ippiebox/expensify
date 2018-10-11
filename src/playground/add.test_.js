const add = (a, b) => a + b;
const generateGreating = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3,4);
  
  // if (result !== 7) {
  //   throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`)
  // }
  expect(result).toBe(7);
})

test('Greeting function test', () => {
  const result = generateGreating('Paul');
  expect(result).toBe('Hello Paul!');
})