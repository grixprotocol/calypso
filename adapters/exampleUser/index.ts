import { StrategyAdapter } from "../types";

export default function(): StrategyAdapter {
    return {
        name: "Conservative Delta-Neutral Strategy",
        author: "0x123...abc",
        version: "1.0.0",
        
        strategyConfig: {
            type: "income",
            description: "Delta-neutral options strategy focusing on consistent yield generation",
            preferredProtocols: ["Moby", "Premia"],
            supportedAssets: ["WETH", "WBTC"],
            collateral: {
                minimum: 1000,
                maximum: 100000,
                currency: "USDC"
            }
        },

        riskProfile: {
            level: "low",
            maxDrawdown: 0.15,
            targetApy: 12,
            preferredPositionDuration: "30d"
        },

        tradingRules: {
            entry: {
                timeOfDay: ["UTC 14:00", "UTC 22:00"],
                minVolume: 100000000,
                technicalIndicators: [
                    {
                        name: "RSI",
                        params: { period: 14, overbought: 70, oversold: 30 }
                    }
                ]
            },
            exit: {
                takeProfit: 0.20,
                stopLoss: 0.10,
                timeBasedExit: true
            }
        },

        metadata: {
            documentation: "https://example.com/strategy-docs",
            contact: "discord:user#1234"
        }
    };
} 