let foo = {
  x: 42,
  baz: function () {
    console.log(this.x);
  },
  bar: () => {
    console.log(this.x);
  },
};
foo.baz(); // FD this = foo => this.x = 42

let bar = foo.baz;
bar(); // потеря контекта this = global => this.x = undefined
foo.bar(); // Arrow func -- this = global => this.x = undefined
