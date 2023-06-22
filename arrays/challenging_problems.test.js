import { expect, test } from "vitest";
import {
  Solution1,
  Solution10,
  Solution2,
  Solution3,
  Solution4,
  Solution5,
  Solution6,
  Solution7,
  Solution9,
} from "./10JavaScriptExcersise";

//test case for solution 1
test("Solution1", () => {
  expect(Solution1(1, 10)).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  expect(Solution1(1, 0)).toEqual([]);
  expect(Solution1(2, 2)).toEqual([2, 2]);
  expect(Solution1(5, 6)).toEqual([5, 5, 5, 5, 5, 5]);
  expect(Solution1(1, -1)).toEqual("Please Enter Positive Number Of Elements");
});

//test case for solution 2
test("Solution2", () => {
  expect(Solution2([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  expect(Solution2([8, 7, 3, 2, 1])).toEqual([1, 2, 3, 7, 8]);
  expect(Solution2(["JAN", "FEB", "MARCH"])).toEqual(["MARCH", "FEB", "JAN"]);
  expect(Solution2([-1, -2, 3, 4, 5])).toEqual([5, 4, 3, -2, -1]);
});

//test case for solution 3
test("Solution3", () => {
  expect(Solution3([1, 2, undefined, null])).toEqual([1, 2]);
  expect(Solution3([false, true, undefined, null])).toEqual([]);
  expect(Solution3([1, 2, undefined, null, ""])).toEqual([1, 2]);
  expect(
    Solution3([1, 2, undefined, null, "", 0, 5, false, true, null])
  ).toEqual([1, 2, 5]);
});

//test case for solution 4
test("Solution4", () => {
  expect(
    Solution4([
      ["a", 3],
      ["b", 5],
      ["c", 10],
    ])
  ).toEqual([{ a: 3 }, { b: 5 }, { c: 10 }]);
  expect(
    Solution4([
      ["a", 8],
      ["b", 9],
      ["c", 10],
    ])
  ).toEqual([{ a: 8 }, { b: 9 }, { c: 10 }]);
  expect(
    Solution4([
      ["3", 3],
      ["5", 5],
      ["7", 10],
    ])
  ).toEqual([{ 3: 3 }, { 5: 5 }, { 7: 10 }]);
  expect(
    Solution4([
      ["a", 100],
      ["b", 1000],
      ["c", 10000],
    ])
  ).toEqual([{ a: 100 }, { b: 1000 }, { c: 10000 }]);
});

//test case for Solution 5
test("Solution5", () => {
  expect(Solution5([1, 2, 3, 1, 2], 1, 2)).toEqual([3]);
  expect(Solution5([1, 5, 3, 1, 2], 1, 2)).toEqual([5, 3]);
  expect(Solution5([1, 2, 4, 1, 4], 1, 4)).toEqual([2]);
  expect(Solution5([1, 1, 3, 1, 0], 1, 0)).toEqual([3]);
  expect(Solution5([0, 1, 2, 3, 4], 1, 2)).toEqual([0, 3, 4]);
});

//test case for Solution 6
test("Solution6", () => {});

//test case for Solution 7
test("Solution7", () => {
  expect(Solution7([1, 2, 3, 4], [1, 2, 3, 4])).toEqual(true);
  expect(Solution7([1, 2, 3, 4, 5], [1, 2, 3, 4])).toEqual(false);
  expect(Solution7([1, 2, 3, 4], [1, 2, 3, 4, 5])).toEqual(false);
  expect(Solution7([1], [])).toEqual(false);
  expect(Solution7([], [])).toEqual(true);
});

//test case for Solution 8
test("Solution8", () => {});

//test case for Solution 9
test("Solution9", () => {
  console.log(Solution9([1, 2, 3, 4], 3));
});

//test case for Solution 10
test("Solution10", () => {
  console.log(Solution10([1, 2, 3], [2, 3, 4, 6, 7], [2, 3, 4]));
});
