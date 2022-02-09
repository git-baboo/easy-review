import { sample } from "@/utils/sample";

describe("sample", () => {
  test("1が返ってくる", () => {
    expect(sample()).toBe(1);
  });
});
