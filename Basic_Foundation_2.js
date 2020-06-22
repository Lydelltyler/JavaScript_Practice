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

var low = 0
var high = 0

function high_array() {
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

