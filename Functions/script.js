function makeBetweenFunc (min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}
//We need to catch it...
makeBetweenFunc(100,200);
//We have now the return function in testRange()
const testRange = makeBetweenFunc(100,200);
//We simply call it...
testRange(40);
testRange(7);
//Let's say that now we want a function that returns true if you are an adult or senior
const isAdult = makeBetweenFunc(19,64);
const isSenior = makeBetweenFunc(65,120);
isAdult(20); // true
isAdult(74); // false
isSenior(69); // true
isSenior(320); //false