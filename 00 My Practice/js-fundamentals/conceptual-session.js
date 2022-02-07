var age = 16;
var vaccineCount = 2;
var isVaccinated = false;

if (age > 20 && vaccineCount == 2) {
    console.log('you may go foreign');
}
if (age > 15 && age < 20 && vaccineCount == 0) {
    console.log('tomorrow is the final date for your first vaccine dose');
}
console.log(isVaccinated);
if (age > 15 && age < 20 && vaccineCount == 2) {
    isVaccinated = true
    console.log('congratulation, you are vaccinated....');
}
console.log(isVaccinated);
