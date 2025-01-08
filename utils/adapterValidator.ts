import { StrategyAdapter } from "../adapters/types";

export function validateAdapter(adapter: StrategyAdapter): boolean {
  // Check top-level required fields
  const topLevelFields = ['name', 'author', 'version', 'strategyConfig', 'riskProfile', 'tradingRules'];
  for (const field of topLevelFields) {
    if (!(field in adapter)) {
      throw new Error(`Missing required top-level field: ${field}`);
    }
  }

  // Validate strategyConfig
  const strategyConfigFields = ['type', 'description', 'preferredProtocols', 'supportedAssets', 'collateral'];
  for (const field of strategyConfigFields) {
    if (!(field in adapter.strategyConfig)) {
      throw new Error(`Missing required strategyConfig field: ${field}`);
    }
  }

  // Validate collateral fields
  const collateralFields = ['minimum', 'maximum', 'currency'];
  for (const field of collateralFields) {
    if (!(field in adapter.strategyConfig.collateral)) {
      throw new Error(`Missing required collateral field: ${field}`);
    }
  }

  // Validate riskProfile
  const riskProfileFields = ['level', 'maxDrawdown', 'targetApy', 'preferredPositionDuration'];
  for (const field of riskProfileFields) {
    if (!(field in adapter.riskProfile)) {
      throw new Error(`Missing required riskProfile field: ${field}`);
    }
  }

  // Validate tradingRules
  const tradingRulesFields = ['entry', 'exit'];
  for (const field of tradingRulesFields) {
    if (!(field in adapter.tradingRules)) {
      throw new Error(`Missing required tradingRules field: ${field}`);
    }
  }

  // Validate specific constraints
  if (adapter.strategyConfig.description.length < 10) {
    throw new Error('Strategy description must be detailed (minimum 10 characters)');
  }

  if (adapter.strategyConfig.collateral.minimum >= adapter.strategyConfig.collateral.maximum) {
    throw new Error('Minimum collateral must be less than maximum collateral');
  }

  return true;
} 

