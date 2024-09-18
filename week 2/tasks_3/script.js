// isPalindromePrime
let isPalindromePrime =  (num) => {
    let original = num 
    let reversed = 0 
    let result = true

   while (num > 0) { 131
        let digit = num % 10;
        reversed = reversed * 10 + digit;  
        num = Math.floor(num / 10);
    }
    if (original == reversed) {
        result = true
    }
    else {
        result = false
    }

 return result
}


// fibonachiNum
function fibonacciNum(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciNum(n - 1) + fibonacciNum(n - 2); 
}

// kassa 
let kassa = (a,b,c,d)=> {
 let cost = a * 60 + b
 let money = c * 60 + d
 if (cost < money){
  let result = money - cost
  let somon = Math.floor(result / 60);
  let diram = result % 60;
  return `${somon} somon ${diram} diram`;
} 
 else {
    return "Not enough money"
 }

}
// console.log(kassa(5,55,10,0))
// console.log(kassa(20,50,15,0))

// cutlet 
const cutlet = (k,m,n) => {
  if(n <= k){
    return m*2
  }
  else {
    return Math.ceil(n/k) * m * 2
  }
}
// console.log(cutlet(1, 5, 1));
// console.log(cutlet(2, 5, 4));
// console.log(cutlet(3, 5, 7));

// repeat 
    let repeat = (a,b,c) => {
        if(a == b && b == a){
            return 3
        }
        else if (a == b || b == c || c == a){
            return 2
        }
        else {
            return 0
        }
    }
    // console.log(repeat(4,3,4))
    // console.log(repeat(1,2,3))

// roman 
let roman = (x) => {
    switch (x){
        case 1: 
          return 'I';
        case 2: 
          return 'II';
        case 3: 
          return 'III';
        case 4: 
          return 'IV';
        case 5: 
          return 'V';
        case 6: 
          return 'VI';
        case 7: 
          return 'VII';
        case 8: 
          return 'VIII';
        case 9: 
          return 'IX';
        case 10: 
          return 'X';
        default:
          return 'басайта то 10';
    }
}
// console.log(roman(1)); 
// console.log(roman(5)); 
// console.log(roman(11)); 

// areaOfCircle
let areaOfCircle = (r) =>{
    return Math.PI * Math.pow(r,2)
}
// console.log(areaOfCircle(3))