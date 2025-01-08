# Clypso - DeFi Options Trading Strategy Repository

A community-driven repository of DeFi options trading strategies that can be interpreted and executed by AI agents.

## Contributing a Strategy

To add your own strategy:

1. Fork this repository
2. Create a new folder under `src/adapters/` with your username or organization name
3. Create an `index.ts` file in your folder that exports a function returning a StrategyAdapter object
4. Ensure your strategy includes all required fields and a detailed strategy description
5. Submit a pull request

### Strategy Description Guidelines

Your strategy description should be detailed enough for an AI agent to understand and implement. Include:

- Clear steps of the strategy execution
- Entry and exit conditions
- Risk management rules
- Position sizing rules
- Any specific market conditions required

### Required Fields

- `name`: Strategy name
- `author`: Your name or organization
- `version`: Semantic version of your strategy
- `strategyDescription`: Detailed description of the strategy
- `supportedAssets`: Array of supported asset symbols
- `minimumCollateral`: Minimum required collateral
- `maximumCollateral`: Maximum recommended collateral
- `riskLevel`: "low", "medium", or "high"

### Optional Fields

- `expectedApy`: Expected annual percentage yield
- `website`: Strategy documentation website
- `documentation`: Additional documentation links
- `contact`: Contact information