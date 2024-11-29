let yigim = +parseFloat(prompt("İstifadəçinin yığımı : "));
let kreditMebliyi = +parseFloat(
  prompt("  istədiyiniz kredit məbləğini daxil edin :  ")
);

if (yigim >= kreditMebliyi * 0.5) {
  console.log("Krediti heç bir problem olmadan ala bilərsiniz");
} else if (yigim < kreditMebliyi * 0.5 && yigim > kreditMebliyi * 0.2) {
  console.log("Həmçinin cosigner ilə kredit ala bilərsiniz");
} else if (yigim <= kreditMebliyi * 0.2) {
  console.log("Kredit üçün girov tələb oluna bilər");
} else {
  console.log("Kredit üçün uyğun deyilsiniz");
}
