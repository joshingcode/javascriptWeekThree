// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

function run(){
    let exercise= "running"
    return `Today's exercise: ${exercise}`

}
console.log(run())

function swim(){
    let anotherExercise= "swimming"
    return `Today's exercise: ${anotherExercise}`
}

console.log(swim())



// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
// // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3));
// // prints "Each person gets 2.67 slices of pizza"

function sharePizza(x){
    let cutPizzaSlice= 8/x
    return  `Each person gets ${cutPizzaSlice} slices of pizza`
    
}
console.log(sharePizza(2))
console.log(sharePizza(3))
