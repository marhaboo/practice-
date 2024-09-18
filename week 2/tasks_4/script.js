 // matchHouses
let matchHouses = (s) => {
  return (s*6 - s+1)
}
// console.log(matchHouses(1))
// console.log(matchHouses(4))
// console.log(matchHouses(86))

// reversed
let reversed = (num) => {
  let reverse = 0
  while (num > 0 ){
    let digit = num%10
    reverse = reverse * 10 + digit
    num = Math.floor(num / 10);
  }
  return reverse
}
// console.log(reversed(5121))

// equal
let equal = (a,b,c) => {
  let a1 = a == b && b==c ? true : false
  let b1 = a==b || b == c || c == a ? true : false
  if (a1 == true){
    return 3
  }
  else if (b1 == true){
    return 2
  }
  else {
    return 0
  }
}
// console.log(equal(3,4,3))
// console.log(equal(1,1,1))
// console.log(equal(1,4,3))

// findLargestDigit 
let findLargestDigit = ( num ) => {
  let max = 0
  while(num > 0){
    if (max < num%10){
      max = num%10
    }
    num = Math.floor(num/10)
  }
  return max

}
// console.log(findLargestDigit(87651))

// mean
const  mean = (num) => {
  let max = 0
  let cnt = 0 
  while(num > 0){
    max = max + num%10 
    cnt++
    num = Math.floor(num/10)
  }
  return max / cnt

}
// console.log(mean(666))


// isPandigital
function isPandigital(num) {
  let numStr = num.toString();
  let digits = new Array(10).fill(false);

  for (let char of numStr) {
      switch (char) {
          case '0':
              digits[0] = true;
              break;
          case '1':
              digits[1] = true;
              break;
          case '2':
              digits[2] = true;
              break;
          case '3':
              digits[3] = true;
              break;
          case '4':
              digits[4] = true;
              break;
          case '5':
              digits[5] = true;
              break;
          case '6':
              digits[6] = true;
              break;
          case '7':
              digits[7] = true;
              break;
          case '8':
              digits[8] = true;
              break;
          case '9':
              digits[9] = true;
              break;
      }
  }

  for (let i = 0; i < 10; i++) {
      if (!digits[i]) {
          return false;
      }
  }

  return true;
}

// console.log(isPandigital(1023456789)); 
// console.log(isPandigital(123456789));  

// fibonachiNum
function fibonacciNum(n) {
  if (n <= 1) {
      return n;
  }
  return fibonacciNum(n - 1) + fibonacciNum(n - 2); 
}

// DoubleFactorial 
function doubleFactorial(n) {
  let result = 1;
  for (let i = n; i > 0; i -= 2) {
      result *= i;
  }
  return result;
}

// console.log(doubleFactorial(9)); 
// console.log(doubleFactorial(3)); 
// console.log(doubleFactorial(6));  

// isNatural 
function isNaturalNumber(num) {
  if(Math.floor(num) === num && num > 0 && typeof num === 'number'){
    return true 
  }
  else {
    return false
  }

}

// console.log(isNaturalNumber(-15));   
// console.log(isNaturalNumber(1));   
// console.log(isNaturalNumber(10/0));  

// LeapYear
export function isLeapYear(year) {
  switch (true) {
      case (year % 400 === 0):
          return true;
      case (year % 100 === 0):
          return false;
      case (year % 4 === 0):
          return true;
      default:
          return false;
  }
}


console.log(isLeapYear(2016));
console.log(isLeapYear(2023)); 
console.log(isLeapYear(2024));




