let count = 0;

function cc(card) {
  // Only change code below this line
    if (card <= 6) 
    count++;
  else if (card >="10")
    count--;
  return count + (count > 0 ? ' Bet' : ' Hold');


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
