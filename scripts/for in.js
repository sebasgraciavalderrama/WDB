const testScores = {
    person1: 15,
    person2: 23,
    person3: 50,
    person4: 69
}
//Object.keys(object)
//Object.entries(object)

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

// to get the total

let total = 0;
for (let score of Object.values(testScores)){
    total+=score;
}

//to get the avg

let scores = Object.values(testScores);
for (let score of scores) {
    total+=score;
}
console.log(total / scores.length)