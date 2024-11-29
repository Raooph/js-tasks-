let experience=+parseFloat(prompt("Enter your experience : "));
let performancePoint=+parseInt(prompt("Enter your performancePoint :"));
if(experience>5 && performancePoint>80){
    console.log("Təqdimat üçün uyğunsunuz");
}else if(3<experience<5 && performancePoint>75){
    console.log("Təqdimat üçün nəzərdən keçirilə bilərsiniz");
}else if(experience<3 && performancePoint>70){
    console.log("Təqdimat üçün yolda olursunuz, amma vaxt ala bilər")
}else {
    console.log("Hazırda təqdimat üçün uyğun deyilsiniz" )
}