export interface StrategyAdapter {
  // Required fields
  name: string;
  author: string;
  version: string;
  strategyDescription: string;
  
  // Strategy configuration
  supportedAssets: string[];
  minimumCollateral: number;
  maximumCollateral: number;
  
  // Risk parameters
  riskLevel: 'low' | 'medium' | 'high';
  expectedApy?: number;
  
  // Optional metadata
  website?: string;
  documentation?: string;
  contact?: string;
}

export interface AdapterFunction {
  (): StrategyAdapter;
} 