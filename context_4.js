const number = 42;
function printContext() {
  console.log(this);
}

const boundFunction = printContext.bind(number);
// Создаётся объект-обёртка для числа 42,
// и этот объект [Number: 42] будет использован как значение `this`
boundFunction();
