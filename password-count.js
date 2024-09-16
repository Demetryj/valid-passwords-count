const data = `
a 1-5: abcdj
z 2-4: asfalseiruqwo
b 3-6: bhhkkbbjjjb
`;

function passwordCounter(data) {
  const lines = data.trim().split("\n");

  const quantityValidPassword = lines.reduce((acc, line) => {
    const [condition, password] = line.split(": ");
    const [symbol, range] = condition.split(" ");
    const [min, max] = range.split("-").map(Number);

    const numberOfMatches = password
      .split("")
      .filter((simb) => simb === symbol).length;

    if (numberOfMatches >= min && numberOfMatches <= max) {
      acc += 1;
    }

    return acc;
  }, 0);

  return quantityValidPassword;
}

const numberOfValidPasswords = passwordCounter(data);

console.log(numberOfValidPasswords);
