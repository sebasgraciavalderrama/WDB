const feline = {
    legs: 4,
    family: 'Felidae'
};
const canine = {
    isFurry: true,
    family: 'Caninae'
};

const catDog = {...feline, ...canine, family: 'Generic Latin Family'};

const numbers = [1,2,3,4,5,6];