import { expect, it } from "vitest";
import {
  deleteElementUsingLoop,
  usingConcat,
  usingFilter,
  usingFind,
  usingMap,
  usingMapInObjects,
  usingPop,
  usingPush,
  usingSlice,
  usingSpliceToAdd,
  usingSpliceToReplace,
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
  expect(usingSlice([1, 2, 3, 4, 5], 2, 4)).toEqual([3, 4]);
});
//test case for concat
it("Concat", () => {
  expect(usingConcat([1, 2, 3, 4], [5, 6, 7, 8, 9])).toEqual([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
});
//test case for findIndex
it("Find Index", () => {
  expect(usingfindIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toEqual(8);
  expect(usingfindIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)).toEqual(5);
  expect(usingfindIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toEqual(3);
});
//test case for find
it("Find", () => {
  expect(usingFind([1, 2, 3, 4, 5], 6)).toEqual(undefined);
  expect(usingFind([1, 2, 3, 4, 5], 2)).toEqual(2);
  expect(usingFind([1, 2, 3, 4, 5], 4)).toEqual(4);
});
//test case for filter
it("Filter", () => {
  expect(usingFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
    4, 5, 6, 7, 8, 9,
  ]);
  expect(usingFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toEqual([8, 9]);
  expect(usingFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toEqual([5, 6, 7, 8, 9]);
  expect(usingFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toEqual([]);
});
//test case for map
it("map", () => {
  expect(usingMap([1, 2, 3, 4, 5])).toEqual([3, 4, 5, 6, 7]);
});

it("mapObject", () => {
  expect(
    usingMapInObjects([
      { key: "nitish", value: 99 },
      { key: "pratik", value: 100 },
    ])
  ).toEqual([{ nitish: 99 }, { pratik: 100 }]);
});
//test case for splice
it("Splice Insert", () => {
  expect(usingSpliceToAdd([1, 2, 3, 4, 5, 6], 3, 10)).toEqual([
    1, 2, 3, 10, 4, 5, 6,
  ]);
});

it("Splice Replace", () => {
  expect(usingSpliceToReplace([1, 2, 3, 4, 5, 6], 3, 10)).toEqual([
    1, 2, 3, 10, 5, 6,
  ]);
});
//test case for push
it("Push", () => {
  expect(usingPush([1, 2, 3, 5, 6, 7], 9)).toEqual([1, 2, 3, 5, 6, 7, 9]);
});
//test case for pop
it("pop", () => {
  expect(usingPop([1, 2, 3, 4, 5, 5, 6])).toEqual([1, 2, 3, 4, 5, 5]);
});
