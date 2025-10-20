function solution(str) {
  const result = [];
  
  if (str.length % 2 !== 0) {
    str += "_";
  }
  
  for (let i = 0; i < str.length; i += 2) {
    const pair = str[i] + str[i + 1];
    result.push(pair);
  }
  
  return result;
}