function reverseString(s) {
   try{
       s = s.split('').reverse().join('');
   } catch(e) {
       console.log("s.split is not a function")
   }
   console.log(s)
}


 const s = "1234" 
 reverseString(s);
