// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(2 * Math.PI *radius)
}

// Code your missionDuration function here:
function missionDuration(numOrbit, orbitRadius = 2000, orbitSpeed = 28000) {
  let distance = orbitCircumference(orbitRadius) * numOrbit;
  let time = Math.round((distance/orbitSpeed) * 100) / 100;
 console.log(`The mission will travel ${distance} km around the planet, and it will take ${time}`) 
  return time;
}
console.log(missionDuration(5))
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arry) {
  let index = Math.floor(arry.length*Math.random())
  return arry[index]
}
// Code your oxygenExpended function here:
function o2Expended(animalObject) {
  let missionLength = missionDuration(3)
  let OxygenUsed = (Math.round(animalObject.o2Used(missionLength)) * 1000) / 1000
 return `${animalObject.name} templete literal in textbook ${missionLength}`
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 console.log()