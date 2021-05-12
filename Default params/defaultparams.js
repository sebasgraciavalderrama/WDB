function rollDie(numSides) {
    return Math.floor(Math.random() * numSides) + 1
}

//-----------**Manually adding a default param...**------------
function rollDieManualParam (numSides) {
    if (numSides === undefined) {
        numSides = 6
    }
    return Math.floor(Math.random() * numSides) + 1
}

//-----------**With default...**------------
function rollDieDefaultParam (numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function greet(person, msg = 'Hey there!', punc = '!') {
    return console.log(`${msg} ${person}${punc}`)
}