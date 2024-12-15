import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import type { MarketIndex } from '../../types/market';

interface IndexCardProps {
  index: MarketIndex;
  onClick?: () => void;
}

export function IndexCard({ index, onClick }: IndexCardProps) {
  const isPositive = index.change >= 0;

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{index.symbol}</h3>
          <p className="text-sm text-gray-600">{index.name}</p>
        </div>
        {isPositive ? (
          <TrendingUp className="text-green-500" />
        ) : (
          <TrendingDown className="text-red-500" />
        )}
      </div>
      <div className="mt-4">
