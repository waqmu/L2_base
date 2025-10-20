function toWeirdCase(string) {
  const words = string.split(' ');
  const result = [];
  
  for (let word of words) {
    let newWord = '';
    
    for (let i = 0; i < word.length; i++) {
      newWord += i % 2 === 0 
        ? word[i].toUpperCase() 
        : word[i].toLowerCase();
    }
    
    result.push(newWord);
  }
  
  return result.join(' ');
}