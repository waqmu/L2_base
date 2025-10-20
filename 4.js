function findMissing(list) {
  const step1 = list[1] - list[0];
  const step2 = list[2] - list[1];
  
  const commonStep = Math.abs(step1) < Math.abs(step2) ? step1 : step2;
  
  for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] - list[i] !== commonStep) {
      return list[i] + commonStep;
    }
  }
  
  return list[0];
}