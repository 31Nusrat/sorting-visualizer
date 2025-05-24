export function getSelectionSortAnimations(array) {
  const animations = [];
  const arr = array.slice();

  for (let i = 0; i < arr.length - 1; i++) {
    let mini = i;
    for (let j = i + 1; j < arr.length; j++) {
      animations.push(["compare", mini, j]);
      if (arr[j] < arr[mini]) {
        mini = j;
      }
      animations.push(["compare", mini, j]);
    }

    if (mini !== i) {
      // Push swap animations
      animations.push(["swap", i, arr[mini]]);
      animations.push(["swap", mini, arr[i]]);

      // Swap correctly using temp
      const temp = arr[i];
      arr[i] = arr[mini];
      arr[mini] = temp;
    }
  }
  return { animations, sortedArray: arr };
}
