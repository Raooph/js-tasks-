let age = +parseFloat(prompt("enter your age : "));
let ticket = true;

if (age < 5) {
  console.log("Parka pulsuz giriş");
} else if (age >= 5 && ticket) {
  console.log("Parkaya girə bilərsiniz");
} else if (age >= 5 && !ticket) {
  console.log("Parka girmək üçün bilet almalısınız");
} else if (age >= 60) {
  console.log("Yaşlılara xüsusi giriş");
}
