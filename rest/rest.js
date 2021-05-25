function sum() {
    console.log(arguments)
    return arguments.reduce((total, el) => total+el)
}

function sum(...nums) {
    return nums.reduce((total, el) => total+el)
}

function raceResults(gold, silver, ...everyoneElse){
    console.log(`Gold medal goes to: ${gold}`)
    console.log(`Silver medal goes to: ${silver}`)
    console.log(`Congrats to: ${everyoneElse}`)
}

sum(33,55,11,88,44)