// 1. Biggie Size

function big_array() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}

// 2. Print Low, Return High 

function high_array(arr) {

    var low = arr[0]
    var high = arr[0]

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        }
        if (arr[i] > high) {
            high = arr[i];
        }
    }
    console.log(low);

    return high;

}

// 3. Print One, Return Another

function another_array() {
    console.log(arr[arr.length - 2])
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
            return arr[i];
        }
    }

}

// 4. Double Vision 

function double(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] *= 2
    }
    return arr;
}

// 5. Count Positives

var numOfPositives = 0

function countPositives(arr) {

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {
            numOfPositives += 1
        }
    }

    arr[arr.length - 1] = numOfPositives

    return arr;
}

// 6. Evens and Odds 

var after3odd = 0;
var after3even = 0;

function evenOdd(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            after3odd += 1;
        }
        if (after3odd == 4) {
            arr[i] = "That's odd!";
            after3odd = 0;
        }
        if (arr[i] % 2 == 0) {
            after3even += 1;
        }
        if (after3even == 4) {
            arr[i] = "Even more so!";
            after3even = 0;
        }

    }

    return arr;
}

// 7. increment the Seconds


function seconds(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arr[i] += 1;
        }
        console.log(arr[i])
    }

    return arr;
}

//8. Previous Lengths

function prev_string(arr) {

    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }

    return arr;
}

// 9. Add Seven

function addSeven(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] += 7
    }

    return arr;
}

// 10. Reverse Array 

function reverseArr(arr) {
    var counter = 1

    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        if (i <= arr.length / 2) {
            arr[i] = arr[arr.length - counter];
            arr[arr.length - counter] = temp;
            counter++
        }
    }
    return arr;
}
reverseArr([3, 1, 6, 4, 2]);


// 11. Outlook: Negative

function negative(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] *= -1
        }
    }

    return arr

}

// 12. Always Hungry

function hungry(arr) {

    var foodCheck = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy")
            foodCheck += 1
        }
    }

    if (foodCheck == 0) {
        console.log("im hungry");
    }

    return arr

}

// 13. Swap Toward the Center

function towardCenter(arr) {

    var temp = arr[0]
    var temp2 = arr[2]

    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp

    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp2


    return arr;

}

// 14. Scale the Array

function scaleArray(arr, num) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] *= num
    }

    return arr;

}