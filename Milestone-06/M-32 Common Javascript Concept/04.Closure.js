const stopWatch = () => {
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

const firstServer = stopWatch();
const secondServer = stopWatch();
console.log(`Second Server give the roast no ${secondServer()}`)
console.log(`Second Server give the roast no ${secondServer()}`)
console.log(`Second Server give the roast no ${secondServer()}`)
console.log(`Second Server give the roast no ${secondServer()}`)
console.log(`Second Server give the roast no ${secondServer()}`)

console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())
console.log(firstServer())