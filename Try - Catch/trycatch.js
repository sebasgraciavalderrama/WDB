try {
    hello.toUpperCase();
} catch {
    console.log("Error");
}

console.log("After!!");

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log("Please use a string");
    }
}

yell("Hello world!");