const myMath = {
    PI: 3.1445,
    square: function (num) {
        return Math.pow(num, 2);
    },
    cube: function (num) {
        return Math.pow(num, 3);
    }
}

let PI = myMath.PI;
let PI2 = myMath["PI"];
myMath.cube(3);
myMath.square(15);
myMath["cube"](4);
myMath["square"](23);

//Alternatively....
const myMath2 = {
    PI: 3.1445,
    square (num) {
        return Math.pow(num, 2);
    },
    cube (num) {
        return Math.pow(num, 3);
    }
}
myMath2.cube(3);
myMath2.square(15);
myMath2["cube"](4);
myMath2["square"](23);