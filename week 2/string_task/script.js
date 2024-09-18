// modifyLast
const modifyLast = (text,num) => {
    let result = text.at(-1).repeat(num)
console.log(text.concat(result))

}
// modifyLast("Hello",3) 
// modifyLast("hey", 6)
// modifyLast("excuse me what?", 5)
// firstLast

const firstLast = (text) => {
    result = ""
console.log(result.concat(text.at(0), text.at(-1)))

}
firstLast("ganesh")
firstLast("shiva")
firstLast("vishnu")

// toInt 
const toInt = (str) => {
    console.log(Number(str))
}
// toStr 
const toStr = (int) => {
    console.log(int.toString())
}
//  toInt("77")
//  toStr(532)

// isPlural
const  isPlural = (str) => {
    if (str.at(-1) == "s"){
        return true
    }
    else{
        return false
    }
}
// console.log(isPlural("changes"))
// console.log(isPlural("change"))
// console.log(isPlural("dudes"))

// reverseCapitalize
const  reverseCapitalize = (str) => {
return str.split('').reverse().join('').toUpperCase();
}
// console.log(reverseCapitalize("abc"))
// console.log(reverseCapitalize("hellothere"))
// console.log(reverseCapitalize("input"))

const swapName = (nameSurname) =>{
    const [firstName, lastName] = nameSurname.split(" ")
    return `${lastName} ${firstName}`
}
// console.log(swapName("John Doe"))
// console.log(swapName("Maks Peter"))
// console.log(swapName("Marhabo Boymurodova"))

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