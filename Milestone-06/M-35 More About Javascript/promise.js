const getData = new Promise((resolve, reject) =>{
    const num = Math.random() * 10;
    if (num < 5) {
        resolve(5500)
    } else {
        reject('No Data Available')
    }
})

getData
    .then(data => console.log(data))
    .catch(err => console.log('Error:', err))








    