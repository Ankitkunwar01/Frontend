'use client';

import DashboardLayout from '@/components/admin/DashboardLayout';
import { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function SimulationPage() {
  // State for controls
  const [breed, setBreed] = useState('');
  const [startDate, setStartDate] = useState('2025-12-30');
  const [endDate, setEndDate] = useState('2025-12-30');

  // Adjustable parameters
  const [fertilityRate, setFertilityRate] = useState(88);
  const [mortalityRate, setMortalityRate] = useState(12);
  const [hatchabilityRate, setHatchabilityRate] = useState(82);
  const [healthyChickRate, setHealthyChickRate] = useState(91);

  // Default values
  const defaults = {
    fertilityRate: 92,
    mortalityRate: 2,
    hatchabilityRate: 85,
    healthyChickRate: 94,
  };

  const restoreDefaults = () => {
    setFertilityRate(defaults.fertilityRate);
    setMortalityRate(defaults.mortalityRate);
    setHatchabilityRate(defaults.hatchabilityRate);
    setHealthyChickRate(defaults.healthyChickRate);
  };

  // Simulated calculations (simple example based on adjustments)
  const baseline = {
    fertileEggs: 40000,
    hatchableCount: 36250,
    healthyChicks: 32000,
    mortalityCount: 2100,
    healthyAdults: 30500,
  };

  const calculateSimulated = () => {
    const fertilityFactor = fertilityRate / defaults.fertilityRate;
    const hatchabilityFactor = hatchabilityRate / defaults.hatchabilityRate;
    const healthyChickFactor = healthyChickRate / defaults.healthyChickRate;
    const mortalityIncrease = mortalityRate / defaults.mortalityRate;

    return {
      fertileEggs: Math.round(baseline.fertileEggs * fertilityFactor),
      hatchableCount: Math.round(baseline.hatchableCount * hatchabilityFactor),
      healthyChicks: Math.round(baseline.healthyChicks * healthyChickFactor),
      mortalityCount: Math.round(baseline.mortalityCount * mortalityIncrease),
      healthyAdults: Math.round(baseline.healthyAdults * (1 - (mortalityRate - defaults.mortalityRate) / 100)),
    };
  };

  const simulated = calculateSimulated();

  const getPercentageChange = (baselineVal: number, simulatedVal: number) => {
    const change = ((simulatedVal - baselineVal) / baselineVal) * 100;
    return change.toFixed(1);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-7xl mx-auto">
        {/* Warning Banner */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center gap-3">
          <div className="text-yellow-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-sm text-yellow-800 font-medium">
            Simulation changes are temporary and for analysis only. They are not saved to the database.
          </p>
        </div>

        {/* Simulation Tool Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Simulation Tool</h2>
            <p className="text-gray-600 mb-8">
              Adjust parameters to simulate different scenarios (e.g., disease outbreak, improved management)
            </p>

            {/* Controls Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Choose a breed</label>
                <select
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Select breed</option>
                  <option>Layer Pro</option>
                  <option>Broiler Max</option>
                  <option>Local Breed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Calendar className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <div className="relative">
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Calendar className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Parameters Section */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Adjust Parameter</h3>
              <button
                onClick={restoreDefaults}
                className="px-5 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                Restore to Defaults
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Fertility & Mortality */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fertility Rate (%)
                  </label>
                  <input
                    type="number"
                    value={fertilityRate}
                    onChange={(e) => setFertilityRate(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Default: {defaults.fertilityRate}%</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mortality Rate (%)
                  </label>
                  <input
                    type="number"
                    value={mortalityRate}
                    onChange={(e) => setMortalityRate(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Default: {defaults.mortalityRate}%</p>
                </div>
              </div>

              {/* Hatchability & Healthy Chick */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hatchability Rate (%)
                  </label>
                  <input
                    type="number"
                    value={hatchabilityRate}
                    onChange={(e) => setHatchabilityRate(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Default: {defaults.hatchabilityRate}%</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Healthy Chick Rate (%)
                  </label>
                  <input
                    type="number"
                    value={healthyChickRate}
                    onChange={(e) => setHealthyChickRate(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Default: {defaults.healthyChickRate}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prediction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Baseline Prediction */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Baseline Prediction</h3>
            <p className="text-sm text-gray-600 mb-6">Using standard breed parameters</p>

            <div className="space-y-5">
              <div className="flex justify-between">
                <span className="text-gray-700">Fertile Eggs</span>
                <span className="font-semibold text-gray-900">{baseline.fertileEggs.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Hatchable Count</span>
                <span className="font-semibold text-gray-900">{baseline.hatchableCount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Healthy Chicks</span>
                <span className="font-semibold text-gray-900">{baseline.healthyChicks.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Mortality Count</span>
                <span className="font-semibold text-gray-900">{baseline.mortalityCount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Healthy Adults</span>
                <span className="font-semibold text-gray-900">{baseline.healthyAdults.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Simulated Prediction */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Simulated Prediction</h3>
            <p className="text-sm text-gray-600 mb-6">Using adjusted parameters</p>

            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Fertile Eggs</span>
                <div className="text-right">
                  <span className="font-semibold text-gray-900">{simulated.fertileEggs.toLocaleString()}</span>
                  <span className={`ml-3 text-sm font-medium ${parseFloat(getPercentageChange(baseline.fertileEggs, simulated.fertileEggs)) < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {getPercentageChange(baseline.fertileEggs, simulated.fertileEggs)}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Hatchable Count</span>
                <div className="text-right">
                  <span className="font-semibold text-gray-900">{simulated.hatchableCount.toLocaleString()}</span>
                  <span className={`ml-3 text-sm font-medium ${parseFloat(getPercentageChange(baseline.hatchableCount, simulated.hatchableCount)) < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {getPercentageChange(baseline.hatchableCount, simulated.hatchableCount)}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Healthy Chicks</span>
                <div className="text-right">
                  <span className="font-semibold text-gray-900">{simulated.healthyChicks.toLocaleString()}</span>
                  <span className={`ml-3 text-sm font-medium ${parseFloat(getPercentageChange(baseline.healthyChicks, simulated.healthyChicks)) < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {getPercentageChange(baseline.healthyChicks, simulated.healthyChicks)}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Mortality Count</span>
                <div className="text-right">
                  <span className="font-semibold text-gray-900">{simulated.mortalityCount.toLocaleString()}</span>
                  <span className={`ml-3 text-sm font-medium ${parseFloat(getPercentageChange(baseline.mortalityCount, simulated.mortalityCount)) < 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {getPercentageChange(baseline.mortalityCount, simulated.mortalityCount)}%
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Healthy Adults</span>
                <div className="text-right">
                  <span className="font-semibold text-gray-900">{simulated.healthyAdults.toLocaleString()}</span>
                  <span className={`ml-3 text-sm font-medium ${parseFloat(getPercentageChange(baseline.healthyAdults, simulated.healthyAdults)) < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {getPercentageChange(baseline.healthyAdults, simulated.healthyAdults)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}