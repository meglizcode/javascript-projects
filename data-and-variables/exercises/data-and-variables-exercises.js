// Declare and assign the variables below
let shuttleName = "determination";
let shuttleSpeedMph = 17500;
let disToMarsKm = 225000000;
let disToMoonKm = 384400;
const mpkm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof disToMarsKm);
console.log(typeof disToMoonKm);
console.log(typeof mpkm);
// Calculate a space mission below
let milesToMars = mpkm*disToMarsKm
let hrToMars = milesToMars/shuttleSpeedMph
let daysToMars = hrToMars/24
// Print the results of the space mission calculations below
console.log (shuttleName + ' will take '+ daysToMars +' days to reach Mars');
// Calculate a trip to the moon below
let milesToMoon = mpkm*disToMoonKm
let hrToMoon = milesToMoon/shuttleSpeedMph
let daysToMoon = hrToMoon/24
// Print the results of the trip to the moon below
console.log (shuttleName + ' will take ' + daysToMoon + ' days to reach the Moon')