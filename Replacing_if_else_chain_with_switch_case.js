// if-else chain
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

//switch-case chain
function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

   switch(val) {
     case "bob":
      return answer = "Marley";
      break;
     case 42:
       return answer = "The Answer";
       break;
     case 1:
       return answer = "There is no #1";
       break;
     case 99:
       return answer = "Missed me by this much!";
       break;
     case  7:
       return answer = "Ate Nine";
       break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);
