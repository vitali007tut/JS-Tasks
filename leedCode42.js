// 42. Trapping Rain Water

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  // let start = 0;
	// let trapWater = 0;
	// if (height.length < 2) return trapWater;
	// const end = height.length - 1;
	// let index = 0
	// while (end != index) {
  //   index = nextNumber(start, height);
  //   trapWater += quantityWater(start, index, height);
  //   start = index;
  // };
	// return trapWater;

	const maxLeft = [0]
	const maxRight = [0]
	const minLR = []
	const volume = []
	let maxL = maxLeft[0];
	let maxR = maxRight[0];

for (let i = 0; i < height.length - 1; i++) {
  const element = height[i];
	maxL = Math.max(maxL, element);
	maxLeft.push(maxL);
}

for (let i = height.length - 1; i > 0; i--) {
  const element = height[i];
  maxR = Math.max(maxR, element);
  maxRight.unshift(maxR);
}

for (let i = 0; i < height.length; i++) {
  const elementLeft = maxLeft[i];
  const elementRight = maxRight[i];
	minLR.push(Math.min(elementLeft, elementRight))
	const elementVolume = minLR[i] - height[i] > 0 ? minLR[i] - height[i] : 0;
	volume.push(elementVolume);
}

	return volume.reduce((acc, elem) => acc + elem, 0);
};

// function nextNumber(index, array) {
//   const wall = array[index];
//   for (let i = index + 1; i < array.length; i++) {
//     const element = array[i];
//     if (wall <= element) {
//       return i;
//     }
//   }

// 	const trimArray = array.slice(index + 1)
// 	const max = Math.max(...trimArray);
// 	const i = trimArray.indexOf(max)
// 	return index + i + 1;
// }

// function quantityWater(index1, index2, array) {
// 	const wall1 = array[index1]
// 	const wall2 = array[index2]
// 	let quatity = Math.min(wall1, wall2) * (index2 - index1 - 1);
// 	for (let i = index1 + 1 ; i < index2; i++) {
// 		quatity -= array[i];
// 	}
// 	return quatity;
// }

//FIXME: -- закоментированный код более долгий -- не проходит на leedCode    

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
console.log(trap([4, 2, 3])); // 1
console.log(trap([1])); // 0
console.log(trap([5, 4, 1, 2])); // 1
