// function with loop


function getUserNumberOver100 () {

    const lastEnteredNumbers = [];

    for(let i = 0; i < 10; i++) {
       const userNumberInput = prompt('Enter a number greater than 100:');

    if (userNumberInput === null) {
       alert('Ok, bye');
       return;
    }
   
    const error = getUserNumberOver100ValidationError(userNumberInput);

    if (error) {
        alert(error);
        continue;
    }

    const num = Math.abs(+userNumberInput);
    lastEnteredNumbers.push(num);

    if (num > 100){       
alert(`You entered number greater than 100.
All entered numbers: ${lastEnteredNumbers.join(", ")}`);
       return;
    }
    else {
        alert('The number must be more than 100');
    }
   }


alert(`You have exhausted 10 attempts.
All entered numbers: ${lastEnteredNumbers.join(", ")}`);
}



function getUserNumberOver100ValidationError (input) { // validation

    const num = +input;

    if (!input.trim()) {
        return 'Nothing entered';
    }

    if (isNaN(num)) {
        return 'It is not a number';
    }

   if (!Number.isInteger(num)) {
        return 'Not a whole number';
    }
    
    return null // гуд
}



getUserNumberOver100();