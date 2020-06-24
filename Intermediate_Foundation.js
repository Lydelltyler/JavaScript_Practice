
// 1. Sigma 
function sigma(num) {

    var sum = 0

    for (var i = 1; i <= num; i++) {
        sum += i
    }
    return sum

}

// 2. Factorial 
sigma(4)

function factorial(num) {

    var sum = 1

    for (var i = 0; i <= num; i++) {
        sum *= i
    }

    return sum
}

factorial(4);

// 3. Fibonacci

function fibonacci(num) {
    var output = []

    if (num === 1) {
        output.push(0)
    } else if (num === 2) {
        output.push(0, 1)
    } else if (num > 2) {
        output.push(0, 1, 1)
    }

    while (output.length !== num) {
        output.push(output[output.length - 1] + output[output.length - 2])
    }

    return output[output.length - 1];
}

fibonacci(5)

// 4. Array: Second-to-Last

//* Sam inspired me to try pseudo code :) */
// 4.1 Set up a function that takes an input of an array "arr"
// 4.2 use an if statement that return the second to last element of the arr input 
// 4.3 use the else statement that returns null if the array length is less then less than or equal to 2


function newarray(arr) {
    if (arr.length > 2) {
        return arr[arr.length - 2]
    } else {
        return null
    }
}

// 5. Array: Nth-to-Last

// 5.1 Set up a function that takes an input of an array "arr" & a number 'n'
// 5.2 use if statement that returns n from array's end or else if its less then length

function newarray(arr, n) {

    if (arr.length >= n) {
        return arr[arr.length - n]
    } else {
        return null
    }

}

// 6. Array: Second-Largest

// 6.1 Set up a function that takes an input of an array "arr" 
// 6.2 create a for loop that goes through al the elements in the array 
// 6.3 create a variable to capture the second largest element
// 6.4 create a statement within the for loop that updates the variable with the second largest number
// 6.5 trashed the plan and find a way
function newarray(arr) {

    var max = arr[0]
    var max2 = []

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max && arr[i] !== max) {
            max2.push(max)
            max = arr[i]
        } else if (arr[i] < max) {
            max2.push(arr[i])
        }
    }

    var secondLargest = max2[0]

    for (var i = 0; i < max2.length; i++) {
        if (max2[i] > secondLargest) {
            secondLargest = max2[i]
        }
    }

    return secondLargest
}


// 7. Double Trouble:

// 7.1 Set up a function that takes an input of an array "arr" 
// 7.2 Set up a for loop that iterate through the array
// 7.3 Use the loop incrementing variable to capture each element of the incoming array
// 7.4 Create a variable with a empty arr
// 7.5 Use push method within the loop twice to add array item to the new array doubled  


function newArray(arr) {

    var newArr = []

    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
        newArr.push(arr[i])
    }
    return newArr
}