function expandedForm(num) {
  const digits = String(num).split('');
  const result = [];
  
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== '0') {
      const value = digits[i] + '0'.repeat(digits.length - i - 1);
      result.push(value);
    }
  }
  
  return result.join(' + ');
}