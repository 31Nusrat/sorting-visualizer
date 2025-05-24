export function getHeapSortAnimations(array) {
  const animations = [];
  const arr = array.slice();
  let n = arr.length;

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i, animations);
  }

  // One by one extract elements
  for (let i = n - 1; i > 0; i--) {
    // Swap root with current element
    animations.push(["swap", 0, arr[i]]);
    animations.push(["swap", i, arr[0]]);
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    heapify(arr, i, 0, animations);
  }

  return{ animations,sortedArray:arr};
  
}

function heapify(arr, n, i, animations) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n) {
    animations.push(["compare", left, largest]);
    animations.push(["compare", left, largest]);
    if (arr[left] > arr[largest]) largest = left;
  }
  if (right < n) {
    animations.push(["compare", right, largest]);
    animations.push(["compare", right, largest]);
    if (arr[right] > arr[largest]) largest = right;
  }
  if (largest !== i) {
    animations.push(["swap", i, arr[largest]]);
    animations.push(["swap", largest, arr[i]]);
    const temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;

    heapify(arr, n, largest, animations);
  }
}
