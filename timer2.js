const readline = require('readline');

const readLineObj = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readLineObj.on('SIGINT', () => {
  readLineObj.write('\nThanks for using me, ciao!\n');
})

readLineObj.question('Enter a number -between 1 and 9- to set a timer: ', (answer) => {
  if (answer === 'b') process.stdout.write('\x07');
  else if (!isNaN(answer)) {
    process.stdout.write(`setting timer for ${answer} seconds...\n`);
    delay = answer * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, delay);
  };
  

  readLineObj.close();
});