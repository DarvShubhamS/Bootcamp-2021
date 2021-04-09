##  ES6(Session 2)

#### Q1.Filter unique array members using Set.

Code:-

     const arr = [2, 3, 2, 1, 6, 1, 3];

     const set1 = new Set(arr);

     console.log(set1.values())

Screenshot:-

<img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es62/screenshot/ss1.JPG" />

#### Q2.Find the possible combinations of a string and store them in a MAP? 

Code:-


    const combimap = new Map()
    function combinator(str) {
    list_of_strings = new Array();
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            list_of_strings.push(str.slice(i, j));
        }
    }

    combimap.set(str, list_of_strings)
    return list_of_strings;
}

    let res = combinator("shubham")
    console.log(res)
    console.log(combimap)

Screenshot:-

<img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es62/screenshot/ss2.JPG" />



#### Q3.Write a program to implement inheritance upto 3 classes.The Class must  public variables and static functions.

Code:-

    class Person {
    constructor(name, age, gender) {

        this.name = name,
            this.age = age,
            this.gender = gender
    }

    Data() {
        return console.log(this.age)

    }

  }



    class Employee extends Person {
    #id
    constructor(id, experience) {
        super()
        this.#id = id
        this.experience = experience
    }

  }


    class Developer extends Employee {
    #department
    static location = "Delhi"
    constructor(technology) {
        super()
        this.technology = technology
        this.#department = "Dev"
        this.testing = "tesing"
    }

    getDept() {
        return this.#department
    }

    static getLocation() {
        console.log(this.location)
    }


  }




    const Emp1 = new Developer()

    Emp1.name = "shubham"
    Emp1.id = 23
    Emp1.age = 23
    Emp1.Data()
    console.log(Emp1.getDept())
    Developer.getLocation()
    console.log(Emp1)


Screenshot:-

<img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es62/screenshot/ss3.JPG" />


#### Q4.Write a program to implement a class having static functions

Code:-

    class Static {
    static varb = 24
    constructor() {
        this.val1 = 1
        this.val2 = 2
    }

    static getVal() {
        console.log(`static variable is : ${this.varb}`)
    }


  }

    Static.getVal()

Screenshot:-

<img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es62/screenshot/ss4.JPG" />


#### Q5.Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.

Code:-

    export function circle(radius) {
    return 3.14 * radius * radius
    }

    export function rectangle(length, width) {
    return length * width
    }

    export function cylinder(r, h) {
    let p = 3.14;
    return ((2 * p * r * h) + (2 * p * r * r))
    }
    
    
    import { circle, rectangle, cylinder, filter } from './modules.js'

    console.log(`area of circle is +  ${circle(2)}`)
    console.log(`area of rectangle is ${rectangle(5, 5)}`)
    console.log(`area of cyliner is :- ${cylinder(2, 4)}`)




Screenshot:-

<img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es62/screenshot/ss5.JPG" />


#### Q6.Import a module for filtering unique elements in an array.

Code:-

    export function filter(arr) {
    let FilteredSet = new Set(arr)
    return FilteredSet
  }
  
    let arr = [2, 4, 4, 5, 5, 6, 2]

    console.log(filter(arr))


Screenshot:-

<img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es62/screenshot/ss6.JPG" />

#### Q7.Write a program to flatten a nested array to single level using arrow functions.

Code:-

    let arr1 = [[1, 2], 3, 4, 5]
    const flatarr = (ar) => {
    let falattended = []
    return falattended.concat(...ar)

  }

    console.log(flatarr(arr1))


Screenshot:-

<img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es62/screenshot/ss7.JPG" />

#### Q8.Implement a singly linked list in es6 and implement addFirst() addLast(), length(), getFirst(), getLast(). (without using array)


Code:-

    console.log("Linkded List")

    class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }
}

    class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    addFirst = (data) => {
        let next = this.head;
        this.head = new Node(data, next)
        this.count++

        return this.head;
    }

    addLast = (data) => {
        let curr_node = this.head
        console.log(curr_node)
        const new_node = new Node(data)
        console.log(new_node)

        if (this.count === 0) {
            this.head = new_node
        }

        else {
            while (curr_node.next) {
                curr_node = curr_node.next
            }

            curr_node.next = new_node
        }

        this.count++

        return this.head

    }


    length() {
        console.log(`length of linked list is :- ${this.count}`)
    }

    getFirst() {
        console.log("head is")
        console.log(this.head)
    }

    getLast() {
        let curr_node = this.head;
        while (curr_node.next) {
            curr_node = curr_node.next
        }

        console.log("last node is:-")
        console.log(curr_node)

    }
}

    let l1 = new LinkedList()

    l1.addFirst(23)
    l1.addFirst(40)

    l1.addLast(69)

    l1.length()
    l1.getFirst()
    l1.getLast()
    console.log(l1)


    console.log("")


Screenshot:-

<img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es62/screenshot/ss8.JPG" />

#### Q9.Implement Map and Set using Es6?

Code:-

    let newMap = new Map()

    newMap.set("id1", "one")
    newMap.set("id2", "two")
    newMap.set("id3", "three")


    console.log(newMap)
    newMap.delete("id3")
    console.log(newMap.has("id1"))
    console.log(newMap)

    for (let [key, value] of newMap) {
    console.log(key + ' = ' + value)
    }


    console.log("SET")

    let newSet = new Set()

    newSet.add(1)
    newSet.add(1)
    newSet.add(2)
    newSet.add(2)
    newSet.add(3)

    console.log(newSet)
    console.log(newSet.has(3))

    newSet.delete(3)

    newSet.forEach(function (value) {
    console.log(value)
    })


Screenshot:-

<img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es62/screenshot/ss9.JPG" />

#### Q10.Implementation of stack (using linked list) ?

Code:-

    class Stack {
    constructor() {
        this.top = null;
        this.count = 0;
    }

    push = (data) => {
        let next = this.top;
        this.top = new Node(data, next)
        this.count++

        return this.top;
    }

    pop = () => {
        let deleted = this.top
        let nextNode = deleted.next
        this.top = nextNode
        this.count--;

        return deleted
    }

    gettop() {
        console.log("head is")
        console.log(this.top)
    }

    length() {
        console.log(`length of linked list is :- ${this.count}`)
    }

  }

    const stk1 = new Stack()
    stk1.push(24)
    stk1.push(40)
    stk1.push(36)
    console.log(stk1)
    stk1.gettop()
    stk1.pop()
    stk1.gettop()




Screenshot:-

<img src="https://github.com/DarvShubhamS/Bootcamp-2021/blob/master/es62/screenshot/q10.JPG" />
