let exit = true;
const todos = [];
let input = prompt("What would you like to do?");
while (exit) {
    switch (input) {
        case 'list':
                for (let i = 0; i < todos.length; i++){
                    console.log(`${i}: ${todos[i]}`);
                }
                break;
        case 'new':
                const newTodo = prompt("Add new todo...");
                todos.push(newTodo);
                console.log(`${newTodo} has been added to the list!`);
                break;
        case 'delete':
                const todoToDelete = parseInt(prompt("Enter the todo number to delete..."));
                const deletedTodo = todos.splice(todoToDelete,1);
                console.log(`The following todo has been deleted: ${deletedTodo}`);
                break;
        case 'quit':
                exit = false;
                break;
        default:
            input = prompt("What would you like to do?");
    }
    if (exit) {
        input = prompt("What would you like to do?");
    }
}
console.log("Ok, exiting...");