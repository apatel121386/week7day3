
// Week 7 - Day 3 Prototypes, Callbacks, Promises/Async/Await
// Brian Stanton
// •
// Yesterday
// 5 points
// Due 9:30 AM
// Please complete the two exercises in the homework3.js

// homework3.js
// Javascript

// GitHub - bstanton773/jsCallbacksPromisesAsync
// https://github.com/bstanton773/jsCallbacksPromisesAsync
// /5
// /2
// /2
// /1
// Class comments
// Your work
// Missing
// Private comments
// Week 7 - Day 3 Prototypes, Callbacks, Promises/Async/Await 
//=======Exercise #1=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/



class People {
    constructor(name, age){
    this.name = name
    this.age = age
}
    agingNormally=()=>{
        console.log(`${this.name} is old, but he's aging normally`)
        this.age += 1
        console.log(`He's in denial that he's ${this.age}`)
    }   
    crazyAging=()=>{
            console.log(`${this.name} is young, but he's aging at an alarming rate.`)
            this.age += 3
            console.log(`Oh great, you called the function and now he's ${this.age}`)
    }
    printInfo=()=>{
                console.log(`${this.name}, ${this.age}`)
    }
}
const Ankit = new People('Ankit', 34)
console.log(aaron.agingNormally())
const John = new People('John', 21)
console.log(John.crazyAging())
console.log(Ankit.printInfo())
console.log(John.printInfo())








// =============Exercise #2 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small word"
*/
const person = {
    pizza:["New York Style","Jets"],
    tacos:"Taco Bell",
    burgers:"In N Out",
    ice_cream:["Chocolate Peanut Butter","Mango","Oreo"],
    shakes:[{
        oberwise:"Chocolate Peanut Butter",
        InNOut:"Chocolate",
        mcDonalds:"Shamrock Shake",
        cupids_candies:"Chocolate Malt"
    }]
}
let favFood = (aperson) => {
    for(let i=0; i<Object.keys(aperson).length; i++){
        console.log(Object.keys(aperson)[i])
        console.log(Object.values(aperson)[i])
    }
}
favFood(person)