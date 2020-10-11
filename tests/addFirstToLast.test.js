import { addFirstToLast } from "../src/addFirstToLast";

test("adds first element in array to end of string", () => {
  const testArr = ["toy", "boat", "car"];
  const testStr = addFirstToLast(testArr);

  expect(testStr).toEqual("toycar");
});
