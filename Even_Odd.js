const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function evenOrOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";
  }
  
  readline.question("Please enter a number: ", (userInput) => {
    let number = parseInt(userInput);
    
    if (isNaN(number)) {
      console.log("That's not a valid number.");
    } else {
      console.log(`The number is ${evenOrOdd(number)}.`);
    }
    
    readline.close();
  });
  