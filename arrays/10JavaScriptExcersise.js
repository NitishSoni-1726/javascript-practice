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
export function Solution6(array) {
  return array.filter((element, id) => array.indexOf(element) === id);
}

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
export function Solution8(inputArr) {
  let output = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (Array.isArray(inputArr[i])) {
      output = output.concat(Solution8(inputArr[i]));
    } else {
      output.push(inputArr[i]);
    }
  }

  return output;
}

//Solution 9
// if size is not a positive number, empty array is returned
//
export function Solution9(array, Size) {
  if (Size <= 0) {
    return [];
  } else {
    let numChunks = Math.ceil(array.length / Size);
    let output = [];
    for (let i = 0; i < numChunks; i++) {
      output = [...output, array.slice(i * Size, (i + 1) * Size)];
    }
    return output;
    // let Array1 = [];
    // let chunk = [];

    // for (let i = 0; i < array.length; i++) {
    //   if (chunk.length === Size) {
    //     Array1 = [...Array1, chunk];
    //     count = 0;
    //     chunk = [];
    //   }

    //   chunk.push(array[i]);
    // }
    // Array1 = [...Array1, chunk];
    // return Array1;
  }
}

//Solution 10
export function Solution10(...arrays) {
  if (arrays.length < 2) {
    return arrays[0];
  }

  const arrayOfArrays = [...arrays];
  let commonElsArrs = [];

  for (let i = 0; i < arrayOfArrays.length - 1; i++) {
    let arr1 = arrayOfArrays[i];
    let arr2 = arrayOfArrays[i + 1];

    let commonEls = [];
    for (let j = 0; j < arr1.length; j++) {
      if (arr2.includes(arr1[j])) {
        commonEls.push(arr1[j]);
      }
    }
    commonElsArrs = [...commonElsArrs, commonEls];
  }
  return Solution10(...commonElsArrs);
}
