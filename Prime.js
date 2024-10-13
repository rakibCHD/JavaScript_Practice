function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', (input) => {
    const number = parseInt(input);
    if (isNaN(number)) {
        console.log("Please enter a valid number.");
    } else {
        if (isPrime(number)) {
            console.log(number + " is a prime number.");
        } else {
            console.log(number + " is not a prime number.");
        }
    }
    readline.close();
});
