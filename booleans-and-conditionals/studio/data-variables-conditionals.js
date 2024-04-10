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
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "Clear";
let prepareForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log (astronautCount + " Count accepted");
} else {
    console.log(astronautCount + " Count Overexceeded");
} 
// add logic below to verify all astronauts are ready
if (astronautsStatus === "Ready") {
    console.log (" Astronaut Status: " + astronautsStatus);
} else {
    console.log (astronautsStatus + ' ALERT! Astronaut Status: "Unprepared for Launch"');
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
    console.log( totalMassKg + '/' + maximumMassLimit + ' Weight Limit approprate');
} else {
    console.log( totalMassKg + '/' + maximumMassLimit + ' Shuttle encombured');
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > -300 && fuelTempCelsius < -150) {
    console.log(fuelTempCelsius + '°C: Fuel temp within safe range');
} else {
    console.log(fuelTempCelsius + '°C: Alert! Fuel temp out of acceptable range');
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log(fuelLevel + ' Fuel Tank Full');
} else {
    console.log(fuelLevel + ' Fuel Tank depleted');
}
// add logic below to verify the weather status is clear
if (weatherStatus === "Clear") {
    console.log('Weather: ' + weatherStatus);
} else {
    console.log(weatherStatus + ': Weather inapproprate for takeoff');
}
// Verify shuttle launch can proceed based on above conditions
if (weatherStatus === "Clear" && fuelLevel === "100%" && fuelTempCelsius > -300 && fuelTempCelsius < -150 && totalMassKg < maximumMassLimit && astronautsStatus === "Ready" && astronautCount <= 7) {
    console.log("Ready to Launch");
} else {
    console.log("Unprepared for Launch")
}