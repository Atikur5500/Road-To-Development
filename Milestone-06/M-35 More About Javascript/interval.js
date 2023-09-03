let num = 0;
console.log(1);
const myId = setInterval(() => {
    console.log(num++)
}, 1000);
clearInterval(myId);
console.log(3);