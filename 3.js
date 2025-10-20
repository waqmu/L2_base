function whatCentury(year) {
  const yearNum = Number(year);
  const century = Math.ceil(yearNum / 100);
  let suffix = 'th';
  
  if (century % 10 === 1 && century % 100 !== 11) suffix = 'st';
  else if (century % 10 === 2 && century % 100 !== 12) suffix = 'nd';
  else if (century % 10 === 3 && century % 100 !== 13) suffix = 'rd';
  
  return century + suffix;
}