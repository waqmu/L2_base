function primeFactors(n) {
  let result = "";
  let factor = 2;
  
  while (n > 1) {
    let count = 0;

    while (n % factor === 0) {
      n = n / factor;
      count++;
    }

    if (count > 0) {
      result += count === 1 
        ? `(${factor})` 
        : `(${factor}**${count})`;
    }
    
    factor++;
  }
  
  return result;
}