import { expect, it } from "vitest";
import {
  deleteElementUsingLoop,
  usingConcat,
  usingFilter,
  usingFind,
  usingSlice,
  usingfindIndex,
} from "./ArrayPractice";

//test case for forLoop
it("Delete Element of a Given Array", () => {
  const array = [1, 2, 3, 4];
  expect(deleteElementUsingLoop(array, 0)).toEqual([2, 3, 4]);
  expect(deleteElementUsingLoop(array, 1)).toEqual([1, 3, 4]);
  expect(deleteElementUsingLoop(array, 2)).toEqual([1, 2, 4]);
  expect(deleteElementUsingLoop(array, 3)).toEqual([1, 2, 3]);
  expect(deleteElementUsingLoop(array, 4)).toEqual([1, 2, 3, 4]);
  expect(deleteElementUsingLoop(array, 5)).toEqual([1, 2, 3, 4]);
  expect(deleteElementUsingLoop(array, -1)).toEqual([1, 2, 3, 4]);
  expect(deleteElementUsingLoop([], 0)).toEqual([]);
});
//test case for slice
it("Slice", () => {
  console.log(usingSlice([1, 2, 3, 4], 0, 3));
  console.log(usingSlice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 7));
  expect(usingSlice([1, 2, 3, 4, 5], 2, 4)).toEqual([3, 4]);
});
//test case for concat
it("Concat", () => {
  console.log(usingConcat([1, 3, 4], [1, 5, 7]));
  expect(usingConcat([1, 2, 3, 4], [5, 6, 7, 8, 9])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
});
//test case for findIndex
it("Find Index", () => {
  console.log(usingfindIndex([1, 2, 3, 4], 3));
  expect(usingfindIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toEqual(8);
  expect(usingfindIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)).toEqual(5);
  expect(usingfindIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toEqual(3);
});
//test case for find
it("Find", () => {
  console.log(usingFind([1, 2, 3, 4, 5], 1));
  expect(usingFind([1, 2, 3, 4, 5], 6)).toEqual(undefined);
  expect(usingFind([1, 2, 3, 4, 5], 2)).toEqual(2);
  expect(usingFind([1, 2, 3, 4, 5], 4)).toEqual(4);
});
//test case for filter
it("Filter", () => {
  console.log(usingFilter([1, 2, 3, 4, 5], 3));
  expect(usingFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
    4, 5, 6, 7, 8, 9,
  ]);
  expect(usingFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toEqual([8, 9]);
  expect(usingFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toEqual([5, 6, 7, 8, 9]);
  expect(usingFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toEqual([]);
});
