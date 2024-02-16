//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
     }
     average(){
        let sumOfScores = 0;
        let av = 0;
       for (let i = 0; i < this.scores.length; i++) {
        sumOfScores = this.scores[i] + sumOfScores;
        
       }
       return (av = sumOfScores / this.scores.length);
     }
     status() {
        const avg = this.average();
        if (avg >= 90) {
          return "Accepted";
    } else if (avg >= 80 && avg <= 89) {
          return "Reserve";
        } else if (avg >= 70 && avg <= 79) {
          return "Probationary";
        } else {
          return "Rejected";
        }
    }
}

//Create objects for the following candidates.
let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

//Use console.log for each object to verify that your class correctly assigns the key/value pairs.
console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.


// bubbaBear.addScore(83);
console.log(bubbaBear.scores);
console.log(bubbaBear.average());
console.log(gladGator.status());


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);