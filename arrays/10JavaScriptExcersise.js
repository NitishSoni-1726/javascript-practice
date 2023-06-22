// Solution 1
export function Solution1(element, NumberOfTimes) {
  if (NumberOfTimes < 0) {
    return "Please Enter Positive Number Of Elements";
  } else {
    let outputArr = [];
    for (let i = 0; i < NumberOfTimes; i++) {
      outputArr.push(element);
    }
    return outputArr;
  }
}

// Solution 2
export function Solution2(array) {
  let reversedArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
}

//Solution 3
export function Solution3(array) {
  let CompactArr = array.filter((element) => {
    return (
      element > 0 &&
      element !== true &&
      element !== null &&
      element !== "" &&
      element !== undefined
    );
  });
  return CompactArr;
}

//Solution 4
export function Solution4(array) {
  const newArray = array.map(([key, value]) => ({ [key]: value }));
  return newArray;
}

//Solution 5
export function Solution5(array, element1, element2) {
  let newArr = array.filter((element) => {
    return element !== element1 && element !== element2;
  });
  return newArr;
}

//Solution 6
export function Solution6(array) {}

//Solution 7
export function Solution7(array1, array2) {
  if (array1.length === 0 && array2.length === 0) {
    return true;
  } else {
    if (array1.length > array2.length || array1.length < array2.length) {
      return false;
    } else if (array1.length === array2.length) {
      for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
}

//Solution 8
export function Solution8() {}

//Solution 9
export function Solution9(array, Size) {
  if (Size <= 0) {
    return "Size Can't be Negative or 0";
  } else {
    let Array1 = [];
    for (let i = 0; i < Size; i++) {
      Array1.push(array[i]);
    }

    return Array1;
  }
}

//Solution 10
export function Solution10(...arrays) {
  const array = [...arrays];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    for (let j = 0; j < array[i].length; j++) {
      console.log(array[i][j]);
    }
  }
}
