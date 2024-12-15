import React from 'react';
import { IndexCard } from './IndexCard';
import { MarketChart } from './MarketChart';
import type { MarketIndex, ChartDataPoint } from '../../types/market';

interface MarketOverviewProps {
  nifty50: MarketIndex;
  sensex: MarketIndex;
  niftyData: ChartDataPoint[];
  sensexData: ChartDataPoint[];
}

export function MarketOverview({ nifty50, sensex, niftyData, sensexData }: MarketOverviewProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <IndexCard index={nifty50} />
        <IndexCard index={sensex} />
      </div>
      
      <MarketChart
        data={niftyData}
        title="NIFTY 50"
        colors={{
          lineColor: '#00C853',
          areaTopColor: '#00C853',
          areaBottomColor: 'rgba(0, 200, 83, 0.28)',
        }}
      />
      
      <MarketChart
        data={sensexData}
        title="BSE SENSEX"
        colors={{
          lineColor: '#FF6B00',
          areaTopColor: '#FF6B00',
          areaBottomColor: 'rgba(255, 107, 0, 0.28)',
        }}
      />
    </div>
  );
}
