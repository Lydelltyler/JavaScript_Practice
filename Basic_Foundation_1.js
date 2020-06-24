// 1. Get 1 to 255 
function get_array() {
    var arr = [];

    for (var i = 1; i <= 255; i++) {
        arr.push(i)
    }

    return arr;
}

// 2. Get even 1000
function newarray () {

var sum = 0

for (var i = 0; i<= 1000; i + 2)
    sum+=i
}

// 2. Get even 1000 
function sum_even_numbers() {
    var sum = 0;

    for (var i = 0; i <= 1000; i++) {

        if (i % 2 === 0) {
            sum += i;
        }
    }

    return sum;
}

// 3. Sum odd 5000 
function sum_odd_5000() {
    var sum = 0;

    for (var i = 0; i <= 5000; i++) {

        if (i % 2 !== 0) {
            sum += i;
        }
    }

    return sum;
}

// 4. Iterate an array
function iterArr(arr) {

    var sum = 0

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}


// 5. Find max
function findMax(arr) {

    var max = 0;

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i]
        }

    }

    return max;
}


// 6. Find Average
function findAvg(arr) {

    var avg = 0

    for (var i = 0; i < arr.length; i++) {
        avg += arr[i]
    }

    return avg / arr.length;
}


// 7. Array odd
function oddNumbers() {
    var arr = [];

    for (var i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            arr.push(i)
        }
    }

    return arr;
}


// 8. Greater than Y
function greaterY(arr, Y) {

    var count = []

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > Y) {
            count.push(i)
        }
    }

    return count.length;
}


// 9. Squares
function squareVal(arr) {

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];

    }

    return arr;
}


// 10. Negatives
function noNeg(arr) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }

    return arr;
}


// 11. Max/Min/Avg
function maxMinAvg(arr) {

    var max = 0;
    var min = 0;
    var avg = 0;

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }
        avg += arr[i];
    }
    avg = avg / arr.length
    var arrnew = [max, min, avg]

    return arrnew;
}


// 12. Swap Values
function swap(arrnew) {

    var temp = arrnew[0];
    arrnew[0] = arrnew[arrnew.length - 1];
    arrnew[arrnew.length - 1] = temp;


    return arrnew;
}


// 13. Number to String
function numToStr(arr) {

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }


    return arr;
}

