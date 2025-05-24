import { useEffect, useState, useRef, useCallback } from "react";
import "./SortingVisualizer.css";
import { getBubbleSortAnimations } from "../algorithms/bubbleSort";
import { getSelectionSortAnimations } from "../algorithms/selectionSort";
import { getInsertionSortAnimations } from "../algorithms/insertionSort";
import { getMergeSortAnimations } from "../algorithms/mergeSort";
import { getQuickSortAnimations } from "../algorithms/quickSort";
import { getHeapSortAnimations } from "../algorithms/heapSort";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [barColors, setBarColors] = useState([]);
  const [arraySize, setArraySize] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [isSorting, setIsSorting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("Bubble Sort");
  const [isNightMode, setIsNightMode] = useState(false);

  const animationsRef = useRef([]);
  const currentAnimIndexRef = useRef(0);
  const speedRef = useRef(speed);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600 && arraySize > 50) {
        setArraySize(50);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateArray = useCallback(() => {
    if (isSorting) return;
    const newArr = Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * 500) + 10
    );
    setArray(newArr);
    setBarColors(new Array(arraySize).fill("var(--bar-color)"));
    animationsRef.current = [];
    currentAnimIndexRef.current = 0;
  }, [arraySize, isSorting]);

  useEffect(() => {
    if (!isSorting) generateArray();
  }, [arraySize]);

  useEffect(() => {
    const savedMode = localStorage.getItem("nightMode");
    if (savedMode === "true") {
      setIsNightMode(true);
      document.body.classList.add("night-mode");
    }
  }, []);

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add("night-mode");
    } else {
      document.body.classList.remove("night-mode");
    }
    localStorage.setItem("nightMode", isNightMode);
  }, [isNightMode]);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const runAnimations = async (onComplete, startIndex = 0) => {
    const animations = animationsRef.current;
    setIsSorting(true);
    setIsPaused(false);
    isPausedRef.current = false;
    currentAnimIndexRef.current = startIndex;

    let colors = [...barColors];
    const barColor = "var(--bar-color)";
    const compareColor = "var(--compare-color)";
    const swapColor = "var(--swap-color)";
    const sortedColor = "var(--sorted-color)";

    for (let i = startIndex; i < animations.length; i++) {
      while (isPausedRef.current) {
        await sleep(50);
      }

      const [action, indexOne, indexTwoOrHeight] = animations[i];

      if (action === "compare") {
        colors[indexOne] = compareColor;
        colors[indexTwoOrHeight] = compareColor;
        setBarColors([...colors]);

        await sleep(speedRef.current);

        colors[indexOne] = barColor;
        colors[indexTwoOrHeight] = barColor;
        setBarColors([...colors]);
      } else if (action === "swap") {
        setArray((prevArray) => {
          const newArr = [...prevArray];
          newArr[indexOne] = indexTwoOrHeight;
          return newArr;
        });

        colors[indexOne] = swapColor;
        setBarColors([...colors]);

        await sleep(speedRef.current);

        colors[indexOne] = barColor;
        setBarColors([...colors]);
      }

      currentAnimIndexRef.current = i + 1;
    }

    colors = colors.map(() => sortedColor);
    setBarColors(colors);

    setIsSorting(false);
    setIsPaused(false);
    isPausedRef.current = false;
    currentAnimIndexRef.current = 0;
    animationsRef.current = [];

    if (onComplete) onComplete();
  };

  const pauseResumeSort = () => {
    if (!isSorting) return;

    if (isPaused) {
      setIsPaused(false);
      isPausedRef.current = false;
    } else {
      setIsPaused(true);
      isPausedRef.current = true;
    }
  };

  const handleSortStart = () => {
    if (isSorting) return;

    let result;
    switch (selectedAlgorithm) {
      case "Bubble Sort":
        result = getBubbleSortAnimations(array);
        break;
      case "Selection Sort":
        result = getSelectionSortAnimations(array);
        break;
      case "Insertion Sort":
        result = getInsertionSortAnimations(array);
        break;
      case "Merge Sort":
        result = getMergeSortAnimations(array);
        break;
      case "Quick Sort":
        result = getQuickSortAnimations(array);
        break;
      case "Heap Sort":
        result = getHeapSortAnimations(array);
        break;
      default:
        result = { animations: [], sortedArray: [] };
    }

    if (!result || !result.animations || result.animations.length === 0) return;

    animationsRef.current = result.animations;
    currentAnimIndexRef.current = 0;

    runAnimations(() => {
      setArray(result.sortedArray);
      setIsSorting(false);
    });
  };

  const resetSort = () => {
    setIsSorting(false);
    setIsPaused(false);
    isPausedRef.current = false;
    currentAnimIndexRef.current = 0;
    animationsRef.current = [];
    generateArray();
  };

  const handleToggle = () => {
    setIsNightMode((prev) => !prev);
  };

  return (
    <div className={`visualizer-container ${isNightMode ? "night" : "day"}`}>
      <div className="toggle-container">
        <label htmlFor="toggle-night">
          {isNightMode ? "Night Mode" : "Day Mode"}
        </label>
        <label className="switch">
          <input
            type="checkbox"
            id="toggle-night"
            checked={isNightMode}
            onChange={handleToggle}
          />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="dropdown-sort">
        <select
          value={selectedAlgorithm}
          onChange={(e) => setSelectedAlgorithm(e.target.value)}
          disabled={isSorting}
        >
          <option>Bubble Sort</option>
          <option>Selection Sort</option>
          <option>Insertion Sort</option>
          <option>Merge Sort</option>
          <option>Quick Sort</option>
          <option>Heap Sort</option>
        </select>
        <button className="start" onClick={handleSortStart} disabled={isSorting}>
          Start
        </button>
      </div>

      {isSorting && !isPaused && (
        <p style={{ color: "var(--text-secondary)" }}>Sorting in progress...</p>
      )}
      {isPaused && <p style={{ color: "var(--text-secondary)" }}>Paused</p>}

      <div className="slider-container">
        <label htmlFor="arraySize">Array Size: {arraySize}</label>
        <input
          id="arraySize"
          type="range"
          min="10"
          max="150"
          value={arraySize}
          onChange={(e) => setArraySize(Number(e.target.value))}
          disabled={isSorting}
        />
      </div>

      <div className="slider-container">
        <label htmlFor="speed">Speed: {speed} ms</label>
        <input
          id="speed"
          type="range"
          min="5"
          max="300"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          disabled={isSorting}
        />
      </div>

      <div className="bar-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
              backgroundColor: barColors[idx] || "var(--bar-color)",
            }}
          ></div>
        ))}
      </div>

      <button className="generate-button" onClick={generateArray} disabled={isSorting}>
        Generate New Array
      </button>

      <div className="control-btn">
        <button onClick={pauseResumeSort} disabled={!isSorting}>
          {isPaused ? "Resume" : "Pause"}
        </button>
        <button onClick={resetSort} disabled={!isSorting}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
