export interface StrategyAdapter {
    // Basic Information
    name: string;
    author: string;
    version: string;
    
    // Strategy Details
    strategyConfig: {
        type: 'hedging' | 'income' | 'directional';
        description: string;
        preferredProtocols: string[];
        supportedAssets: string[];
        collateral: {
            minimum: number;
            maximum: number;
            currency: string;
        };
    };

    // Risk Parameters
    riskProfile: {
        level: 'low' | 'medium' | 'high';
        maxDrawdown: number;
        targetApy: number;
        preferredPositionDuration: '7d' | '14d' | '30d' | '90d';
    };

    // Trading Rules
    tradingRules: {
        entry: {
            timeOfDay?: string[];
            minVolume: number;
            technicalIndicators?: {
                name: string;
                params: Record<string, any>;
            }[];
        };
        exit: {
            takeProfit: number;
            stopLoss: number;
            timeBasedExit?: boolean;
        };
    };

    // Optional Metadata
    metadata?: {
        documentation?: string;
        contact?: string;
        website?: string;
        updates?: {
            date: string;
            changes: string[];
        }[];
    };
}
  
export interface AdapterFunction {
    (): StrategyAdapter;
} 