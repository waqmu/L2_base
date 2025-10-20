function hasTwoCubeSums(n) {
  const pairs = [];
  const limit = Math.cbrt(n);
  
  for (let a = 1; a <= limit; a++) {
    for (let b = a + 1; b <= limit; b++) {
      const sum = a ** 3 + b ** 3;
      if (sum === n) {
        pairs.push([a, b]);
      }
    }
  }
  
  if (pairs.length >= 2) {
    for (let i = 0; i < pairs.length; i++) {
      for (let j = i + 1; j < pairs.length; j++) {
        const [a, b] = pairs[i];
        const [c, d] = pairs[j];
        if (a !== c && a !== d && b !== c && b !== d) {
          return true;
        }
      }
    }
  }
  return false;
}

console.log(hasTwoCubeSums(1729)); 
console.log(hasTwoCubeSums(42)); 