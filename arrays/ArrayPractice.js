//For Loop
export function deleteElementUsingLoop(array, Index) {
  if (Index < 0 || Index > array.length) {
    return array;
  } else {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i !== Index) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
}

//Slice
export function usingSlice(array, startingIndex, endingIndex) {
  const sliceArr = array.slice(startingIndex, endingIndex);
  return sliceArr;
}
