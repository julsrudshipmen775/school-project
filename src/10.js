let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
let numbers = [1, 2, 3, 4, 5, 6];
let mixed = names.map((name) => ({ name }));
mixed = mixed.concat(numbers.map((number) => ({ number })));
console.log(mixed);
