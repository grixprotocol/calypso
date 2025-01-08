import { StrategyAdapter } from '../types/adapter';

export function validateAdapter(adapter: StrategyAdapter): boolean {
  const requiredFields = [
    'name',
    'author',
    'version',
    'strategyDescription',
    'supportedAssets',
    'minimumCollateral',
    'maximumCollateral',
    'riskLevel'
  ];

  for (const field of requiredFields) {
    if (!(field in adapter)) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  if (adapter.strategyDescription.length < 100) {
    throw new Error('Strategy description must be detailed (minimum 100 characters)');
  }

  return true;
} 