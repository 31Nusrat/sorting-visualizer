export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return{ animations,sortedArray:auxiliaryArray};
 
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
  if (startIdx === endIdx) return;
  const midIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, midIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, midIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, midIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, midIdx, endIdx, auxiliaryArray, animations) {
  let i = startIdx;
  let j = midIdx + 1;
  let k = startIdx;

  while (i <= midIdx && j <= endIdx) {
    // Compare elements at i and j
    animations.push(["compare", i, j]);
    animations.push(["compare", i, j]); // revert colors

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // Overwrite mainArray[k] with auxiliaryArray[i]
      animations.push(["swap", k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push(["swap", k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= midIdx) {
    animations.push(["compare", i, i]); // Compare to self to mimic color change
    animations.push(["compare", i, i]);
    animations.push(["swap", k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push(["compare", j, j]);
    animations.push(["compare", j, j]);
    animations.push(["swap", k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
