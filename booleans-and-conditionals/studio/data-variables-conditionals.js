// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautsStatus = "Ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 85000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "Clear";
let prepareForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
// if (astronautCount <= 7) {
//     console.log("Ready to Launch");
// } else if (totalMassKg < maximumMassLimit) {
//     console.log("2Ready to Launch"); 
// } else if ((fuelTempCelsius < -300) || (fuelTempCelsius > -150)) {
//     console.log("3Ready to Launch");
// } else if (fuelLevel === "100%") {
//     console.log("4Ready to Launch");
// } else if (weatherStatus === "Clear") {
//     console.log("5Ready to Launch");
// } else {
//     console.log("Not ready for lift off")
// 
if (astronautCount <= 7) {
    console.log ("Count accepted");
} else {
    console.log("Count Overexceeded")
} 
if (astronautsStatus === "Ready") {
    console.log ("Astronaut Status: Ready")
} else {
    console.log ("ALERT! Astronaut Status: Unprepared for Launch")
}
if (totalMassK < maximumMassLimit) 

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
