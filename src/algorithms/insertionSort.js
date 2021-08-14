import sleep from "./sleep";

async function insertionSort(inputArr, setter) {
  let n = inputArr.length;
  for (let i = 1; i < n; i++) {
    let current = inputArr[i];
    let j = i - 1;
    while (j > -1 && current < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = current;
    await sleep(50);
    setter([...inputArr]);
  }
  return inputArr;
}

export default insertionSort;
