let num = [2, 9, 0, 8, 4, 5, 6];
num.sort();
for (let pos = 0; pos < num.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

for (const pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}
