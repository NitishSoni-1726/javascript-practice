import { expect, it } from "vitest";
import deleteElementUsingLoop from "./ArrayPractice";
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
