const reverseString = text => {
    let reversed = '';
    for(let i = text.length-1; i >= 0; i--){
        let element = text[i];
        reversed = reversed + element;
    }
    return reversed;
}

/* let findReverse = 'I am from Bangladesh';
let reverse = reverseString(findReverse);
console.log(reverse); */


// Word Reverse
let wordReverse = string => {
    let words = string.split(' ');
    let reverse = [];
    for(let i = string.length - 1; i >= 0; i--){
        let element = string[i]
        reverse.push(element);
    }
   let doReverse = reverse.join(' ');
   return doReverse;
}


let getResult = 'I am a failure';
let result = wordReverse(getResult);
console.log(result);













