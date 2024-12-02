let number = +parseFloat(prompt("Enter number : "));
let sum = 0;
for (let i = 100; i <= 999; i++) {
  if (i % number === 0) {
    sum += i;
    console.log(sum);
  }
}
