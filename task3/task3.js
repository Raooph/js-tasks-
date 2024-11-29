let hungerLevel = +parseFloat(
  prompt("Enter your hunger level from 1 to 10 : ")
);
if (hungerLevel >= 8) {
  console.log("Yemək sifariş edə bilərsiniz, çox acsiniz");
} else if (5 <= hungerLevel <= 7) {
  console.log("Yemək sifariş edə bilərsiniz, amma çox ac deyilsiniz");
} else if (3 <= hungerLevel <= 4) {
  console.log("Bir az gözləyə bilərsiniz");
} else {
  console.log("Hələ ac deyilsiniz, yeməyə ehtiyacınız yoxdur");
}
