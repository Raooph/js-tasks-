// İstifadəçidən məlumatları almaq üçün prompt istifadə olunur
let income = +parseFloat(prompt("Aylıq gəlirinizi daxil edin:"));
let creditPoint = +parseInt(prompt("Kredit balınızı daxil edin:"));

// Şərtləri yoxlayırıq
if (income > 3000 && creditPoint > 700) {
    console.log("Kredit almağa uyğunsunuz.");
} else if  (income > 3000 && creditPoint <= 700) {
    console.log("Kredit balınız çox aşağıdır.");
} else if  (income > 1500 && income <= 3000 && creditPoint > 650) {
    console.log("Kiçik bir kredit ala bilərsiniz.");
} else {
    console.log("Kredit almağa uyğun deyilsiniz.");
}