export function getBubbleSortAnimations(array) {
  const animations = [];
  const arr = array.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // 1. Compare (color bars red)
      animations.push(["compare", j, j + 1]);

      // 2. Revert color (back to teal)
      animations.push(["compare", j, j + 1]);

      if (arr[j] > arr[j + 1]) {
        // 3. Swap bars: push two swap animations — one for each bar's new height
        animations.push(["swap", j, arr[j + 1]]);
        animations.push(["swap", j + 1, arr[j]]);

        // Actually swap in the array to keep sorting correct
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return{ animations,sortedArray:arr};
}
