// JavaScript Aulas DIO
//console.log("Hello World!");
/*function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
        else {
            console.log('${array[i]} nao e par!');
        }
    }
    console.log("Os numeros pares sao:", evenNums);
}

let array = [1, 2, 9, 4, 5, 6];

returnEvenValues(array);*/
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}


