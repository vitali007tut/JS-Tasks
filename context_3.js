const obj = {
  a: 1,
  e: (function () {
    return () => {
      console.log(this.a);
    };
  }),
};

obj.e(); // стрелочная функция вызывается в глобальном кв -- this = global
obj.e.call({ a: 2 }); // // стрелочная функция вызывается в глобальном кв -- this = global -- call не влияет
