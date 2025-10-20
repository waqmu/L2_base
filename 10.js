function bingo(ticket, win) {
  let miniWins = 0;
  
  for (let [text, targetCode] of ticket) {
    let found = false;
    
    for (let char of text) {
      if (char.charCodeAt(0) === targetCode) {
        found = true;
        break;
      }
    }
    
    if (found) miniWins++;
  }
  
  return miniWins >= win ? "Winner!" : "Loser!";
}