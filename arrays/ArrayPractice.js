//for Loop

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

//slice

export function usingSlice(array, startingIndex, endingIndex) {
  const sliceArr = array.slice(startingIndex, endingIndex);
  return sliceArr;
}

// concat

export function usingConcat(array1, array2) {
  const concatArr = array1.concat(array2);
  return concatArr;
}

//findIndex

export function usingfindIndex(array, searchedElement) {
  const index = array.findIndex((Element) => Element === searchedElement);
  return index;
}

//find

export function usingFind(array, Element) {
  const element = array.find((x) => x === Element);
  return element;
}

//filter

export function usingFilter(array, filter) {
  //here it will return an array where every element present in the returned array will be greater asked filter
  const FilteredArray = array.filter((element) => element > filter);
  return FilteredArray;
}
