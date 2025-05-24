export function getQuickSortAnimations(array) {
  const animations = [];
  const arr = array.slice();
  quickSortHelper(arr, 0, arr.length - 1, animations);
  return{ animations,sortedArray:arr};
  
}

function quickSortHelper(arr, low, high, animations) {
  if (low < high) {
    const pi = partition(arr, low, high, animations);
    quickSortHelper(arr, low, pi - 1, animations);
    quickSortHelper(arr, pi + 1, high, animations);
  }
}

function partition(arr, low, high, animations) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    animations.push(["compare", j, high]);
    animations.push(["compare", j, high]); // revert color

    if (arr[j] < pivot) {
      i++;
      animations.push(["swap", i, arr[j]]);
      animations.push(["swap", j, arr[i]]);
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  animations.push(["swap", i + 1, arr[high]]);
  animations.push(["swap", high, arr[i + 1]]);
  const temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}
