// function sumTwoNumber(a,b){
//     return a+b;
// }
// console.log(sumTwoNumber(2,3))
// console.log(sumTwoNumber(4,4))
// console.log(sumTwoNumber(-2,4))

// function checkNumber(n){
//     if (n > 0){ 
//         return "Positive";
//     }
//     else if (n < 0){ 
//         return "Negative";
//     }
//     else {
//         return "Zero";
//     }
// }
// console.log(checkNumber(5))
// console.log(checkNumber(-8))
// console.log(checkNumber(0))


// function generateMultiplicationTable(n){
//     for(let i = 1; i <= 10 ; i++){
//         console.log(i*n);
//     }

// }
// console.log(generateMultiplicationTable(5))


// function endNine(n){
//         if (n%10 == 9){
//             return "YES";
//         }
//         else {
//                 return "No";
//             }
//         }
    
//     console.log(endNine(149))
//     console.log(endNine(387))
//     console.log(endNine(29))  



// function century(c){
//     return Math.ceil(c/100);
// }    

// console.log(century(1705))
// console.log(century(1900))
// console.log(century(2000))



// function longestTime(h,m,s){
//     if (h * 3600 > m * 60  && h * 3600 > s){
//         return h;
//     }
//     else if ( m*60 > h*3600 && m*60 > s){
//         return m;
//     }
//     else {
//         return s;
//     }
// }

// console.log(longestTime(1, 59, 3598))
// console.log(longestTime(2, 300, 15000))
// console.log(longestTime(15, 955, 59400))


// function same(number) {
//     let hundreds = Math.floor(number / 100);
//     let tens = Math.floor((number % 100) / 10);
//     let units = number % 10;

//     if (hundreds == tens || hundreds == units || tens ==units) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(same(123)); 
// console.log(same(122)); 
// console.log(same(121)); 
// console.log(same(111)); 


// function largestSwap(number) {
  
//     let tens = Math.floor(number / 10);
//     let units = number % 10;

//     let swappedNumber = units * 10 + tens;


//     return number >= swappedNumber;
// }

// console.log(largestSwap(14)); // false
// console.log(largestSwap(53)); // true
// console.log(largestSwap(99)); // true
// console.log(largestSwap(21)); // true



// function addUp(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(addUp(4))
// console.log(addUp(13))
// console.log(addUp(600))


// function addUp(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(addUp(4))
// console.log(addUp(13))
// console.log(addUp(600))


// function different(a, b, c) {
//     if (a == b) {
//         return 3; 
//     } else if (a === c) {
//         return 2; 
//     } else {
//         return 1; 
//     }
// }

// console.log(different(5,5,10)); // 3
// console.log( different(897,1,1)); // 2
// console.log( different(811,100,811)); // 1


// function EvenNum(A, B) {
//     let sum = 0;
//     for (let i = A; i <= B; i++) {
//             sum += i;}
//     return sum;
// }

// console.log(EvenNum(-10, -2)); // -30
// console.log(EvenNum(-20, -10)); // -90
// console.log(EvenNum(-15, -5)); // -50


// function maxNum(number) {
//     let maxDigit = 0;
//     for (let n = number; n > 0; n = Math.floor(n / 10)) {
//         let digit = n % 10;
//         if (digit > maxDigit) {
//             maxDigit = digit;
//         }
//     }
//     return maxDigit;
// }

// console.log(maxNum(7132)); // 5
// console.log(maxNum(897)); // 9
// console.log(maxNum(811)); // 9


function maxMinNum(number) {
    let maxDigit = 0;
    let minxDigit = 0;
    for (let n = number; n > 0; n = Math.floor(n / 10)) {
        let digit = n % 10;
        if (digit > maxDigit) {
            maxDigit = digit;
        }
    }
    return maxDigit;
}

console.log(maxNum(7132)); 
console.log(maxNum(897)); 
console.log(maxNum(811)); 


