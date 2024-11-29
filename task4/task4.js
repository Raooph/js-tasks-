let annualIncome = +parseFloat(prompt("Enter your annual income  : "));
let NumberOfDependents = +parseFloat(
  prompt("Enter your number of dependents  : ")
);
if (annualIncome < 30000 && NumberOfDependents >= 2) {
  console.log("Vergi geri ödəməsi alırsınız");
} else if (annualIncome < 50000 && NumberOfDependents > 1) {
  console.log("Qismən vergi geri ödəməsi ala bilərsiniz");
} else if (annualIncome > 50000) {
  console.log("Vergi geri ödəməsi almırsınız");
} else {
  console.log(
    "Vergi geri ödəməsi uyğunluğunuz gəlirinizə və asılılarınızın sayına bağlıdır"
  );
}
