//For Loop
export default function deleteElementUsingLoop(array, Index) {
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
