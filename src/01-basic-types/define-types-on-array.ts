
let listOfNum: number[] = [1, 2, 3]

type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
}

/**
 * Challenge: create an array of people objects and
 * manually type it as an array of Person types
 */

let people = [person1, person2]
// kedua ini adalah sintaks yang sama
let people2: Array<Person> = [person1, person2]