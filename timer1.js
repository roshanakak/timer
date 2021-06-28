const timer1 = function() {
  let args = process.argv.splice(2, process.argv.length);
  args.forEach(function(element, index) {
    if (!isNaN(element)) args[index] = parseInt(element);
  }, args);
  args = args.sort(function(a, b) {
    return a - b;
  });

  let delay = 0;
  args.forEach(element => {
    if (element > 0) {
      delay = element * 1000;
      setTimeout(() => {
        process.stdout.write('\x07');
      }, delay);
    }
  });
};

timer1();