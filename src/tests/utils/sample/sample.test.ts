import { sample } from "@/tests/utils/sample/sample";

describe("sample", () => {
  test("1が返ってくる", () => {
    expect(sample()).toBe(1);
  });
});
