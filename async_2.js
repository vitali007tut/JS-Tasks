async function a(p) {
  return p;
}

console.log("1");
(async function () {
  console.log("f1");
  console.log(await a("a1"));
  console.log("f2");
  console.log(await a("a2"));
  console.log("f3");
})();
console.log("2");



// (function () {
//   console.log("f1");
//   a("a1").then((res) => {
//     console.log(res);
//     console.log("f2");
//     a("a2").then((res) => {
//       console.log(res);
//       console.log("f3");
//     });
//   });
// })();