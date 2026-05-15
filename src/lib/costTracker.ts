export type TokenUsage = {
  inputTokens: number;
  outputTokens: number;
  costPerMillionTokens: number;
};

export function estimateCost(usage: TokenUsage) {
  const totalTokens = usage.inputTokens + usage.outputTokens;

  return (totalTokens / 1_000_000) * usage.costPerMillionTokens;
}
