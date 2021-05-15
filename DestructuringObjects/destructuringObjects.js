const user = {
    email: 'email@test.com',
    name: 'Name',
    born: 1954,
    died: 1999,
    city: 'Ohio'
}

const user2 = {
    email: 'email2@test.com',
    name: 'Name2',
    born: 1994,
    city: 'Ohio'
}

const {email} = user; // const email = user.email
const {email, name, born, city} = user;

//To rename a property of an object to whatever I want... (Also a defualt value)
const {born: birthYear = 'N/A'} = user;

//To add defualt values to a property of an object...
const {city, name, died = 'N/A'} = user2;
