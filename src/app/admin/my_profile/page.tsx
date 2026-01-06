'use client';

import DashboardLayout from '@/components/admin/DashboardLayout';
import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';
import Pagination from '@/components/ui/Pagination';
import { useState } from 'react';
import FlockForm from '@/components/ui/FlockForm';


// Realistic sample data
const flockData = [
  {
    id: 1,
    hatchery: 'Ram Poultry Farm',
    breed: 'Breed1',
    flockSize: 250,
    fertilityRate: 92,
    hatchabilityRate: 87,
    healthyChickRate: 91,
    mortalityRate: 2,
    healthyAdults: 228,
    eggCount: 217,
  },
  {
    id: 2,
    hatchery: 'Sam Poultry Farm',
    breed: 'Layer Pro',
    flockSize: 400,
    fertilityRate: 95,
    hatchabilityRate: 89,
    healthyChickRate: 93,
    mortalityRate: 1,
    healthyAdults: 392,
    eggCount: 380,
  },
  {
    id: 3,
    hatchery: 'Ram Poultry Farm',
    breed: 'Broiler Max',
    flockSize: 180,
    fertilityRate: 88,
    hatchabilityRate: 82,
    healthyChickRate: 85,
    mortalityRate: 4,
    healthyAdults: 165,
    eggCount: 0,
  },
  // Add more as needed
];

export default function FlockDetailsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  // const [isFlockModalOpen, setIsFlockModalOpen] = useState(false);
  const [selectedHatchery, setSelectedHatchery] = useState<string>('');
  const [isFlockModalOpen, setIsFlockModalOpen] = useState(false);


  const ITEMS_PER_PAGE = 10;

  // Filter data based on selected hatchery
  const filteredData = selectedHatchery
    ? flockData.filter((flock) => flock.hatchery.toLowerCase().includes(selectedHatchery.toLowerCase()))
    : flockData;

  const totalItems = filteredData.length;
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when filtering changes
  const handleHatcheryChange = (value: string) => {
    setSelectedHatchery(value);
    setCurrentPage(1);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col gap-6">
          {/* Hatchery Selector */}
          <div className="max-w-xs">
            <label htmlFor="hatchery-select" className="block text-sm font-medium text-gray-700 mb-2">
              Select Hatchery
            </label>
            <select
              id="hatchery-select"
              value={selectedHatchery}
              onChange={(e) => handleHatcheryChange(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            >
              <option value="">All Hatcheries</option>
              <option value="Ram Poultry Farm">Ram Poultry Farm</option>
              <option value="Sam Poultry Farm">Sam Poultry Farm</option>
              {/* Add more options dynamically in real app */}
            </select>
          </div>

          {/* Title + Add Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">All Flock Details</h2>
              <p className="text-gray-600 mt-1">
                View and manage all registered flocks
              </p>
            </div>

            <Button
              onClick={() => setIsFlockModalOpen(true)}  
              className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition"
            >
              + Add Flock Details
            </Button>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            <Table
              data={paginatedData}
              columns={[
                'Hatchery',
                'Breed',
                'Flock size',
                'Fertility rate (%)',
                'Hatchability rate (%)',
                'Healthy chick rate (%)',
                'Mortality rate (%)',
                'Healthy adults',
                'Egg Count',
              ]}
              renderCell={(row, column) => {
                switch (column) {
                  case 'Hatchery':
                    return <span className="font-medium text-gray-900">{row.hatchery}</span>;
                  case 'Breed':
                    return <span className="text-gray-700">{row.breed}</span>;
                  case 'Flock size':
                    return <span className="font-semibold text-gray-900">{row.flockSize.toLocaleString()}</span>;
                  case 'Fertility rate (%)':
                    return <span className="text-green-700 font-medium">{row.fertilityRate}%</span>;
                  case 'Hatchability rate (%)':
                    return <span className="text-green-700 font-medium">{row.hatchabilityRate}%</span>;
                  case 'Healthy chick rate (%)':
                    return <span className="text-green-700 font-medium">{row.healthyChickRate}%</span>;
                  case 'Mortality rate (%)':
                    return <span className="text-red-700 font-medium">{row.mortalityRate}%</span>;
                  case 'Healthy adults':
                    return <span className="font-semibold text-gray-900">{row.healthyAdults.toLocaleString()}</span>;
                  case 'Egg Count':
                    return <span className="font-semibold text-gray-900">{row.eggCount.toLocaleString()}</span>;
                  default:
                    return '-';
                }
              }}
            />

            {/* Pagination */}
            {totalItems > 0 ? (
              <div className="mt-8 flex flex-col items-center gap-4">
                <Pagination
                  currentPage={currentPage}
                  totalItems={totalItems}
                  itemsPerPage={ITEMS_PER_PAGE}
                  onPageChange={setCurrentPage}
                />
                <p className="text-sm text-gray-500">
                  Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
                  {Math.min(currentPage * ITEMS_PER_PAGE, totalItems)} of {totalItems} flocks
                </p>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No flock details found.</p>
              </div>
            )}
          </div>
        </div>
      </div>

       <FlockForm
        isOpen={isFlockModalOpen}
        onClose={() => setIsFlockModalOpen(false)}
        />
      
    </DashboardLayout>
  );
}