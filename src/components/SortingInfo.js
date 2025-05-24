import React, { useState } from "react";
import BubbleSortExplanation from "../utils/BubbleSortAnimation";
import SelectionSortExplanation from "../utils/SelectionSort";
import InsertionSortExplanation from "../utils/InsertionSort";
import MergeSortExplanation from "../utils/MergeSort";
import QuickSortExplanation from "../utils/QuickSort";
import HeapSortExplanation from "../utils/HeapSort";
import './SortingInfo.css'
const SortingInfo = () => {
  const [selectedAlgo, setSelectedAlgo] = useState(null);

  const renderExplanation = () => {
    switch (selectedAlgo) {
      case "bubble":
        return <BubbleSortExplanation />;
      case "selection":
        return <SelectionSortExplanation />;
      case "insertion":
        return <InsertionSortExplanation />;
      case "merge":
        return <MergeSortExplanation />;
      case "quick":
        return <QuickSortExplanation />;
      case "heap":
        return <HeapSortExplanation />;
      default:
        return <p>Please select an algorithm to see its explanation.</p>;
    }
  };

  return (
    <div className="sorting-info-container">
      <h1>Sorting Algorithms Info</h1>
      <div className="algo-buttons">
        <button onClick={() => setSelectedAlgo("bubble")}>Bubble Sort</button>
        <button onClick={() => setSelectedAlgo("selection")}>Selection Sort</button>
        <button onClick={() => setSelectedAlgo("insertion")}>Insertion Sort</button>
        <button onClick={() => setSelectedAlgo("merge")}>Merge Sort</button>
        <button onClick={() => setSelectedAlgo("quick")}>Quick Sort</button>
        <button onClick={() => setSelectedAlgo("heap")}>Heap Sort</button>
      </div>
      <div className="explanation-container">{renderExplanation()}</div>
    </div>
  );
};

export default SortingInfo;
