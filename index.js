// function with loop

let userNumberInput = null;



function getUserNumberOver100 () {

    for(let i = 0; i <= 10; i++) {
        userNumberInput = prompt('Enter a number greater than 100:');

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

    if (num > 100){
       alert ('your last number is ' + num);
       return;
    }
    else {
        alert('The number must be more than 100');
    }
   }


   alert('You have exhausted 10 attempts.');
}



function getUserNumberOver100ValidationError (userNumberInput) { // validation

    const num = +userNumberInput;

    if (!userNumberInput.trim()) {
        return 'Nothing entered';
    }

   if (!Number.isInteger(num)) {
        return 'Not a whole number';
    }

    if (isNaN(num)) {
        return 'It is not a number';
    }
    
    return null // it's ok
}



getUserNumberOver100();