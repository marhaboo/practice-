// function while1(A,B){
//     let i = A;
//     while(i >= B){
//         i-= B
//     }
//     return i;
// }

// console.log(while1(55.91, 10.41));


// function while2(A, B) {
//     let count = 0;
//     while (A >= B) {
//         A -= B;
//         count++;
//     }
//     return count;
// }

// console.log(while2(29.79, 19.78)); 




// function while3(N, K) {
//     let quotient = 0;
//     let remainder = N;

//     while (remainder >= K) {
//         remainder -= K;
//         quotient++;
//     }

//     return { quotient, remainder };
// }

// let N = 13;
// let K = 13;
// let result = while3(N, K);
// console.log(`Quotient: ${result.quotient}, Remainder: ${result.remainder}`); 


// function while4(N) {
//     if (N <= 0) return false;
//     while (N % 3 === 0) {
//         N /= 3;
//     }
//     return N === 1;
// }

// let N = 25;
// console.log(while4(N)); 






// function while5(N) {
//     let K = 0;
//     while (N > 1) {
//         N /= 2;
//         K++;
//     }
//     return K;
// }

// let N = 4096;
// console.log(while5(N)); 

