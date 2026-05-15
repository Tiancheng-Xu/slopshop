import { describe, expect, it } from "vitest";
import { estimateCost } from "../src/lib/costTracker";

describe("estimateCost", () => {
  it("estimates provider cost from token usage", () => {
    expect(
      estimateCost({
        inputTokens: 500,
        outputTokens: 500,
        costPerMillionTokens: 10,
      }),
    ).toBe(0.01);
  });
});
