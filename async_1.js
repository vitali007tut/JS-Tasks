console.log('start');
(async function(){
    console.log("1");
    await console.log('2');
    console.log('3');
})()
console.log('end');

// Аналогичный код
// console.log('start');
//     console.log("1");
//     Promise.resolve(console.log('2')).then(() => {
//     console.log('3');
// })
// console.log('end');