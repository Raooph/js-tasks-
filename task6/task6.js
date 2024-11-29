let age = +parseFloat(prompt("Enter your age : "));
let drivingLicence = true;

if (age >= 18 && drivingLicence) {
  console.log("Sürmək hüququnuz var");
} else if (age >= 16 && !drivingLicence) {
  console.log("Yalnız müşahidə altında sürə bilərsiniz");
} else if (age < 16) {
  console.log("Sürmək üçün kifayət qədər yaşınız yoxdur");
} else {
  console.log("Sürmək üçün sürücülük vəsiqəsi almalısınız");
}
