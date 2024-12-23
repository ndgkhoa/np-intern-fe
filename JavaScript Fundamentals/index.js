//1. Variables
let text = "good morning"
const age = 30
var isStudent = false
console.log(text, age, isStudent)

//2. Data Types
let str = "Hello"
let num = 42
let isReady = true
let user = { name: "John" }
let noValue
let empty = null
console.log(typeof str, typeof num, typeof isReady, typeof user, typeof noValue, typeof empty)

//3. Type Conversions
let str3 = "123"
let num3 = Number(str)
let bool3 = Boolean(num)
console.log(num3, typeof num3)
console.log(bool3, typeof bool3)

//4. Basic Operators, Math
let a = 5
let b = 3
console.log(a + b, a - b, a * b, a / b, a % b, a ** b)

//5. Comparisons
console.log(5 > 3)
console.log("5" == 5)
console.log("5" === 5)

//6. Conditional Branching
let age6 = 18
if (age6 < 18) {
    console.log("Underage")
} else if (age6 === 18) {
    console.log("Just became an adult")
} else {
    console.log("Adult")
}

//7. Logical Operators
let isLoggedIn = true
let hasPermission = false
if (isLoggedIn && hasPermission) {
    console.log("Access granted")
} else {
    console.log("Access denied")
}

//8. Nullish Coalescing Operator
let user8 = null
let defaultUser = "Guest"
console.log(user8 ?? defaultUser)

//9. Loops
for (let i = 0; i < 5; i++) {
    console.log(i)
}

//10. Switch
let day = 3
switch (day) {
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    default:
        console.log("Invalid day")
}

//11. Function
function greet(name) {
    return `Hello, ${name}`
}
console.log(greet("Alice"))

//12. Promise
let checkNumber = (number) =>
    new Promise((resolve, reject) => {
        if (number > 0) {
            resolve(`The number ${number} is positive!`)
        } else if (number < 0) {
            reject(`The number ${number} is negative.`)
        } else {
            reject(`The number is zero.`)
        }
    })

checkNumber(5)
    .then((result) => console.log("Success:", result))
    .catch((error) => console.log("Error:", error))

//13. Error Handling
try {
    let result = 10 / 0
    console.log(result)
} catch (error) {
    console.log("Error occurred:", error.message)
}
