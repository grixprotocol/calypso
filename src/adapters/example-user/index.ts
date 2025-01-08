import { StrategyAdapter } from '../../types/adapter';

export default function(): StrategyAdapter {
  return {
    name: "Conservative Delta-Neutral Strategy",
    author: "Example User",
    version: "1.0.0",
    strategyDescription: `
      This strategy implements a delta-neutral options position by:
      1. Selling at-the-money put options
      2. Buying out-of-the-money put options for downside protection
      3. Delta-hedging the remaining exposure using the underlying asset
      
      The strategy aims to generate consistent yields while maintaining
      minimal directional exposure to the underlying asset's price movements.
    `,
    supportedAssets: ["WETH", "WBTC"],
    minimumCollateral: 1000,
    maximumCollateral: 100000,
    riskLevel: "medium",
    expectedApy: 12,
    documentation: "https://example.com/strategy-docs"
  };
} 