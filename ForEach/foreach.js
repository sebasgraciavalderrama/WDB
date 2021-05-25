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

books.forEach(function(book){
    console.log(`${book.title} - ${book.score}/200`);
});


numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }
});