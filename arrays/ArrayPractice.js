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

//map

export function usingMap(array) {
  //here it will return an new array where 2 is added to each element in the provided array
  const newArray = array.map((x) => x + 2);
  return newArray;
}

export function usingMapInObjects(array) {
  //here it will return an array of object where the provided array is changed from [{key:name,value:value},...] to [{key:value},...]
  const newArray = array.map(({ key, value }) => ({ [key]: value }));
  return newArray;
}

//splice

export function usingSpliceToAdd(array, index, newElement) {
  // here it will add a new element in the given index
  array.splice(index, 0, newElement);
  return array;
}

export function usingSpliceToReplace(array, index, newElement) {
  array.splice(index, 1, newElement);
  return array;
}

//push

export function usingPush(array, newElement) {
  array.push(newElement);
  return array;
}

//pop

export function usingPop(array) {
  array.pop();
  return array;
}
