// console.log(NaN + 1 + null + 1); // NaN
// console.log(NaN + 1 + null + 1 + ''); // 'NaN'
// console.log("" + NaN + 1 + null + 1 + ""); //

// console.log("number" + 15 + 3); // number153
// console.log(true + false); // преоразует к number (т.к. нет string) 1 + 0 = 1
// console.log([] + null + 1); // '' + null + 1 => 'null1'
// console.log("foo" + +"bar"); // fooNaN
// console.log(!!"false" == !!"true"); // 1 == 1 => true
// console.log(null == ""); // null равно только null или undefined => false
// console.log([] == ![]); // '' == !'' => 0 ==  false => true
// console.log(0 || "0" && {}); // '0' && {} => {}

// https://habr.com/ru/companies/ruvds/articles/347866/
