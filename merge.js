/**
 * 56. Merge Intervals
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const array = [intervals[0]];
  const length = intervals.length;

  for (let index = 1; index < length; index++) {
    let element = intervals[index];

    if (array.at(-1)[1] >= element[0]) {
      const temp = [array.at(-1)[0], Math.max(array.at(-1)[1], element[1])];
      array.pop();
      array.push(temp);
    } else {
      array.push(element);
    }
  }
  return array;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // [[1,5]]
console.log(
  merge([
    [1, 4],
    [0, 4],
  ])
); // [ [ 0, 4 ] ]
console.log(
  merge([
    [1, 4],
    [0, 1],
  ])
); // [ [ 0, 4 ] ]
console.log(
  merge([
    [1, 4],
    [0, 0],
  ])
); // [[0,0],[1,4]]
console.log(
  merge([
    [1, 4],
    [0, 2],
    [3, 5],
  ])
); // [[0,5]]
console.log(
  merge([
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
    [1, 10],
  ])
); // [[1,10]]
