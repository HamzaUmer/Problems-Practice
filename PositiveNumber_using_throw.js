function isPositive(a) {
    let result = "YES";
    
    if(a < 0) {
        throw {message: "Negative Error"};
    }
    if(a===0) {
        throw {message: "Zero Error"};
    }
    
    return result
}



  const n = 3;

  for (let i = 0; i < n; i++) {
      const a = [1,2,3,4];

      try {
          console.log(isPositive(a));
      } catch (e) {
          console.log(e.message);
      }
  }
