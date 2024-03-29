function foo() {
  const x = 10;
  return {
    x: 20,
    bar: () => {
      console.log(this.x);
    },
    baz: function () {
      console.log(this.x);
    },
  };
}

const obj1 = foo();
obj1.bar(); // undefined т.к у функции foo this = global в нестрогом режиме
obj1.baz(); // 20, т.к. this = object after return

const obj2 = foo.call({ x: 30 });

let y = obj2.bar;
let z = obj2.baz;
y(); // 30 т.к у функции foo this = { x: 30 } после привязи контекста call
z(); //* потеря контекста: undefined, т.к. this = global при вызове z()

obj2.bar(); // 30 т.к у функции foo this = { x: 30 } после привязи контекста call
obj2.baz(); // 20, т.к. this = object after return
