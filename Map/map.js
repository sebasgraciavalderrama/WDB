const texts = ['rolf', 'lol', 'omg', 'lmao'];
const numbers = [1,2,3,4,5,6,7,8,9];

const books = [
    {
        title: 'El olvido que seremos',
        score: 21
    },
    {
        title: 'Memorias de mis putas tristes',
        score: 19
    },
    {
        title: 'Theory of time',
        score: 95
    },
    {
        title: 'Death by Black Hole and other Cosmic quandaries',
        score: 80
    },
    {
        title: 'Universe in a nutshell',
        score: 125
    },
]

const UpperedStrings = texts.map(function (text) {
    return text.toUpperCase();
})

const titles = books.map(function (book) {
    return book.title;
})
const  doubles = numbers.map(function (num) {
    return num*2;
});
//*-------Excersise Map Practice--------*

function cleanNames (names) {
    return names.map(function (name){
        return name.trim();
    });
}

//*---------------*
console.log(doubles);
console.log(titles);
console.log(UpperedStrings);
