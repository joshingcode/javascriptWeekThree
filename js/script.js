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
    return  `Each person gets ${cutPizzaSlice} slices of pizza` ;
    
}
console.log(sharePizza(2))
console.log(sharePizza(3))

// HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function.

//     The ssn property should not be accessible at all.

//     Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.

//     You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.

class Person {
    #social= "000-333-4444"
    constructor(name){
        
        this.name= name;
    }
        social() {
            return `${this.name}\'s social is .... ${this.#social}`
        }
    }


let John= new Person('John')

console.log(John.social())

//     VERY HARD: Object prototype chain and prototypal inheritance exercise.
//     1. Create a Person constructor that has three properties: name, job, and age.

//     2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".

//     3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".

//     4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.


//     5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.

//     6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.

//     7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.

//     8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
//     Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or
//     properties to incorporate the syntax.

//     function Person(name, job, age) { }
//     function Programmer(name, job, age, languages) 



class CodeStudent{
    constructor(thename,job,age){
        this.name=thename
        this.job=job
        this.age=age;
    }
        exercise(){
            console.log('Running is fun! - said no one ever.')
        }
    fetchJob(){
        console.log(`${this.thename} is a ${this.job}`)
    }
}
class CodeProgrammer extends CodeStudent{
    #status=true
    constructor(thename, job, age,languages){
        super(thename, job, age )
    this.languages=languages
}
completeTask(){
    this.#status=false
}
acceptNewTask(){
    this.#status=true
}
offerNewTask(){
    if (this.#status===true){
        console.log(`${this.thename} cant\'t accet any new tasks right now `)

    }else{
        console.log(`${this.thename} would love to take on new responsibility`)
    }
}
learnlanguages(){
    this.languages=['GO','JS']
    return this.languages
}
listLanguages(){
    this.languages.push("Python","C++")
    return this.languages
}
}

let chris= new CodeProgrammer("Chris","Software Engineer",26,"HTML")
console.log(chris)
let tayli= new CodeProgrammer("Tayli","Full Stack Dev",24, "Python")
console.log(tayli)
let ibt= new CodeProgrammer("Ivanna","Software Engineer",23,"JS")
console.log(ibt)
let reggie= new CodeProgrammer("Reggie","Backend Dev", 26,"React")
console.log(reggie)