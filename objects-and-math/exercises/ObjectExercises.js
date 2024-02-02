let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2
   move: function () {return Math.floor(Math.random()*11)}
};

let duperChimpone = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3
   move: function () {return Math.floor(Math.random()*11)}
};

let beagliBeagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4
   move: function () {return Math.floor(Math.random()*11)}
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5
   move: function () {return Math.floor(Math.random()*11)}
};

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, duperChimpone, beagliBeagle, waterBear];

// Assign astronautID to each animal object.
for (let i = 0; i < crew.length; i++) {
   crew[i].astronautID = i + 1; // Assigning unique astronautID starting from 1
}

// Print out the relevant information about each animal.
for (let i = 0; i < crew.length; i++) {
   console.log(`Name: ${crew[i].name}, Species: ${crew[i].species}, Astronaut ID: ${crew[i].astronautID}`);
}

// Start an animal race!
console.log("Let the animal race begin!");
