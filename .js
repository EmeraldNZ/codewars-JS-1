//Create a function named divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. 

//If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).


function divisors(integer) {
  let arr = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      arr.push(i);
    }
  }
  if (arr.length === 0) {
    return integer + " is prime";
  } else {
    return arr;
  }
};

/*

Test Results:
Test Passed: Value deep equals [3, 5]
Test Passed: Value deep equals [2, 3, 4, 6]
Test Passed: Value deep equals '13 is prime'

*/
