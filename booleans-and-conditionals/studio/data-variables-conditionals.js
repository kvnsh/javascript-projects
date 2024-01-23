// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -255;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let prepareForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    prepareForLiftOff = false;
    console.log("Sorry, too many astronauts!");
}
// add logic below to verify all astronauts are ready
if (astronautStatus != "ready") {
    prepareForLiftOff = false;
    console.log("Sorry, the astronauts aren't ready!");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > 850000) {
    prepareForLiftOff = false;
    console.log("Sorry, the total mass exceeds the limit!");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= maximumFuelTemp || fuelTempCelsius <= minimumFuelTemp) {
    prepareForLiftOff = false;
    console.log("The fuel temperature is not within acceptable range.");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {

} else {
    prepareForLiftOff = false;
    console.log("Not enough fuel to launch!");
}
// add logic below to verify the weather status is clear
if (weatherStatus != "clear") {
    prepareForLiftOff = false;
    console.log("Sorry, the weather isn't good enough to launch!");
}
// Verify shuttle launch can proceed based on above conditions
if (prepareForLiftOff) {
console.log("Date:" + date);
console.log("Time:" + time);
console.log("Astronaut Count:" + astronautCount);
console.log("Crew Mass:" + crewMassKg);
console.log("Fuel Mass:" + fuelMassKg);
console.log("Shuttle Mass:" + shuttleMassKg);
console.log("Total Mass:" + totalMassKg);
console.log("Fuel Temperature:" + fuelTempCelsius);
console.log("Weather Status:" + weatherStatus);
console.log("Have a safe flight, astronauts!");
} else {
    console.log("Not ready for liftoff, check all systems!");
}