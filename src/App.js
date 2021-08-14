import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Main from "./components/Main/Main";
import bubbleSort from "./algorithms/bubbleSort.js";
import insertionSort from "./algorithms/insertionSort";
import mergeSort from "./algorithms/mergeSort";
import heapSort from "./algorithms/heapSort";

function App() {
  const [size, setSize] = useState(40);
  const [arr, setArr] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    generateNewArr();
  }, [size]);

  const generateNewArr = () => {
    const randomArr = Array.from(
      { length: size },
      () => Math.floor(Math.random() * 400) + 5
    );
    setArr(randomArr);
  };

  const rangeChange = (val) => {
    setSize(val);
  };

  const bubbleSortHandler = async () => {
    setIsSorting(true);
    await bubbleSort(arr, setArr);
    setIsSorting(false);
  };
  const heapSortHandler = async () => {
    setIsSorting(true);
    await heapSort(arr, setArr);
    setIsSorting(false);
  };
  const insertionSortHandler = async () => {
    setIsSorting(true);
    await insertionSort(arr, setArr);
    setIsSorting(false);
  };
  const mergeSortHandler = async () => {
    console.log("merge");
    console.log(mergeSort(arr));
  };

  return (
    <div>
      <NavBar
        isSorting={isSorting}
        getRange={rangeChange}
        createNewArr={generateNewArr}
        onBubbleSort={bubbleSortHandler}
        onInsertionSort={insertionSortHandler}
        onHeapSort={heapSortHandler}
        onMergeSort={mergeSortHandler}
      />
      <Main data={arr} />
    </div>
  );
}

export default App;
