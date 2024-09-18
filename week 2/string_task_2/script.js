// multiplyNums
const multiplyNums = (str) => {
    let a = str.split(",");
    let result = 1;
    for(let i = 0; i < a.length; i++){
        result*= a[i]
        
    }
    return result;
}
// console.log(multiplyNums("2,3"))
// console.log(multiplyNums("1,2,3,4"))
// console.log(multiplyNums("54,75,453,0"))

// numberSyllables
const numberSyllables = (str) => {
    let res = str.split("-")
    return res.length

}
// console.log(numberSyllables("but-fet"))
// console.log(numberSyllables("beau-ti-ful"))
// console.log(numberSyllables("on-o-mat-o-poe-ai"))

const swapName = (nameSurname) =>{
    const [firstName, lastName] = nameSurname.split(" ")
    return `${lastName} ${firstName}`
}
// console.log(swapName("John Doe"))
// console.log(swapName("Maks Peter"))
// console.log(swapName("Marhabo Boymurodova"))

// hasSpace
const hasSpace = function (str){
  return str.includes(" ")
}
// console.log(hasSpace("hello"))
// console.log(hasSpace("hello, word"))
// console.log(hasSpace(" "))

//  helloName
const  helloName = function (name){
  return "Hello " +  name
}
// console.log(helloName("Gerald"))
// console.log(helloName("Said"))
// console.log(helloName("Falony"))

//  helloName
const   getMiddle = function (str){
  let length = str.length 
  let middle = Math.floor(length / 2)
  if (length % 2 === 0) {
    return str.slice(middle - 1, middle + 1);
} else {
    return str.charAt(middle);
}
}
// console.log(getMiddle("test"))
// console.log(getMiddle("testing"))
// console.log(getMiddle("A"))


//  doubleLetter
const   doubleLetter = function (str){
 for (let i = 0; i < str.length - 1; i++){
    if (str[i] === str[i+1] ){
        return true 
    }
}
        return false
    }
// console.log(doubleLetter("loop"))
// console.log(doubleLetter("yummy"))
// console.log(doubleLetter("orange"))


//   findNemo
const findNemo = function (str){
    let splitted = str.split(" ")
    let index = splitted.indexOf("Nemo") + 1

    if (splitted.includes("Nemo")){
        return "I found Nemo at "  + index + "!"
    }
    else{
        return "I can’t find Nemo :("
    }
    }
// console.log( findNemo("I am finding Nemo !"))
// console.log( findNemo("Nemo is me"))
// console.log( findNemo("I am Nemo"))

// reverse   
const reverse = function (str){
    let words = str.split(' '); 
    let result = words.map(word => {
        return word.length >= 5 ? word.split('').reverse().join('') : word;
    });
    return result.join(' '); 
}
// console.log(reverse("Reverse")); 
// console.log(reverse("This is a lacipyt sentence."));
// console.log(reverse("The dog is big"));  

// dashed 
const dashed = function (str) {
    const vowels = 'aeiouAEIOU';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            result += '-' + str[i] + '-';
        } else {
            result += str[i];
        }
    }

    return result;
}

// console.log(dashed("Edabit"));  
// console.log(dashed("Carpe Diem"));
// console.log(dashed("Fight for your right to party!"));

// joinDigit 
const joinDigit = function (num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        result.push(i)
    }
    return result.join('-');
}


// console.log(joinDigit(4)); 
// console.log(joinDigit(11));
// console.log(joinDigit(15)); 

// checkPalindrome
const checkPalindrome = (str) => {
    const reversed = str.split("").reverse().join("");
    return reversed == str;
     
}
// console.log(checkPalindrome("mom"))
// console.log(checkPalindrome("scary"))
// console.log(checkPalindrome("reviver"))

// charCount
const charCount = (char, str ) => {
    let cnt = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            cnt++;
        }
    }
return cnt;
}
// console.log(charCount("a", "edabit"))
// console.log(charCount("c", "Chamber of secrets"))
// console.log(charCount("b", "big fat bubble"))

// capToFront
const capToFront = (str) => {
    let uppercase = '';
    let lowercase = '';
    
    for (let char of str) {
        if (char === char.toUpperCase()){
            uppercase += char;
        } else {
            lowercase += char;
        }
    }
    
    return uppercase + lowercase;
};

// console.log(capToFront("hApPy"));  
// console.log(capToFront("JavaScript")); 

// reverseAndNot
const  reverseAndNot = (num) => {
    const str = num.toString();
    const reversed = str.split('').reverse().join('');
    return `${num}${reversed}`
}
// console.log(reverseAndNot((123)))
// console.log(reverseAndNot((152)))
// console.log(reverseAndNot((123456789)))


// doubleChar 
const doubleChar = function (input) {
    if (typeof input !== 'string') {
        return "Not a string";
    }
    let result = '';
    for (let i = 0; i < input.length; i++) {
        result += input[i] + input[i];
    }
    return result;
}


// console.log(doubleChar("String")); 
// console.log(doubleChar("ApplLe"));  
// console.log(doubleChar(213));   

// sevenBoom
const sevenBoom = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString().includes('7')) {
            return "Boom!";
        }
    }
    return "Not!";
}


// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); 
// console.log(sevenBoom([3, 2, 5, 6]));          
// console.log(sevenBoom([2, 55, 60, 97, 86]));   


// removeNumbers
const removeNumbers = function (str) {
    return str.replace(/\d/g, '');
}

// console.log(removeNumbers("mubashir1")); 
// console.log(removeNumbers("12ma23t"));    
// console.log(removeNumbers("el1di4y5a"));  


// reverseCapitalize
const  reverseCapitalize = (str) => {
    return str.split('').reverse().join('').toUpperCase();
    }
    // console.log(reverseCapitalize("abc"))
    // console.log(reverseCapitalize("hellothere"))
    // console.log(reverseCapitalize("input"))


    // reversew 
    const reversew = function (str) {
        let reversedStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            let char = str[i];
            if (char === char.toUpperCase()) {
                reversedStr += char.toLowerCase();
            } else {
                reversedStr += char.toUpperCase();
            }
        }
        return reversedStr;
    }
    

    // console.log(reversew('Hello World'));
    // console.log(reversew('reverse')); 
    // console.log(reversew('RaDaR'));
    

// unrepeated 
    const unrepeated = function (str) {
        let result = '';
        for (let i = 0; i < str.length; i++) {
            if (!!!result.includes(str[i])) {
                result += str[i];
            }
        }
        return result;
    }
    

    // console.log(unrepeated("hello"));
    // console.log(unrepeated("aaaaa"));
    
    // console.log(unrepeated("WWE!!!")); 

    // i am pushing it 