let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sum(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let user of data) {
      total += user.salary;
    }

    return total;
  }

  let total = 0;

  for (let item of Object.values(data)) {
    total += sum(item);
  }

  return total;
}

console.log(sum(company));