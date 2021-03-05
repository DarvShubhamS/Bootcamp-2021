import { circle, rectangle, cylinder, filter } from './modules.js'

console.log(`area of circle is +  ${circle(2)}`)
console.log(`area of rectangle is ${rectangle(5, 5)}`)
console.log(`area of cyliner is :- ${cylinder(2, 4)}`)

//Import a module for filtering unique elements in an array.
let arr = [2, 4, 4, 5, 5, 6, 2]

console.log(filter(arr))
