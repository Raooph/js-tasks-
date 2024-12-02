let n = prompt("Enter the text : ");
let sum = "";
for (let i = n.length - 1; i >= 0; i--) {
  sum += n[i];
}
console.log(sum);
