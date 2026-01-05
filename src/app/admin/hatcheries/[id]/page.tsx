'use client';

import DashboardLayout from '@/components/admin/DashboardLayout';
import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';
import FlockForm from '@/components/ui/FlockForm';
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import useRouter

// Mock data
const mockHatchery = {
  id: 1,
  name: 'Ram Poultry Farm',
  address: 'Srijananagar, Bhaktapur',
  contact: '9800000000',
  registeredNumber: '123-123-412',
  status: 'Active',
};

const mockFlockData = [
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
];

export default function HatcheryDetailPage() {
  const [activeTab, setActiveTab] = useState<'hatchery' | 'flocks'>('hatchery');
  const [selectedHatchery, setSelectedHatchery] = useState('');
  const [isAddFlockModalOpen, setIsAddFlockModalOpen] = useState(false);

  const router = useRouter(); // Initialize router

  const hatchery = mockHatchery; // In production: fetch via params.id

  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-7xl mx-auto">
        {/* Back Button + Tabs */}
        <div className="flex items-center gap-6 border-b border-gray-200 pb-4">
          <button
            onClick={() => router.back()} // Go back dynamically
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Back</span>
          </button>

          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('hatchery')}
              className={`px-6 py-2.5 rounded-lg font-medium transition ${
                activeTab === 'hatchery'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              Hatchery Details
            </button>
            <button
              onClick={() => setActiveTab('flocks')}
              className={`px-6 py-2.5 rounded-lg font-medium transition ${
                activeTab === 'flocks'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              Flocks Detail
            </button>
          </div>
        </div>

        {/* Select Hatchery Dropdown */}
        <div className="max-w-md">
          <label htmlFor="hatchery-select" className="block text-sm font-medium text-gray-700 mb-2">
            Select Hatchery
          </label>
          <select
            id="hatchery-select"
            value={selectedHatchery}
            onChange={(e) => setSelectedHatchery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          >
            <option value="">All Hatcheries</option>
            <option value="1">Ram Poultry Farm</option>
            <option value="2">Sam Poultry Farm</option>
            <option value="3">Poultry Farm (Gongabu)</option>
            <option value="4">Poultry Farm (Sanepa)</option>
          </select>
        </div>

        {/* Conditional Content Based on Active Tab */}
        {activeTab === 'hatchery' ? (
          /* Hatchery Details Card */
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8">
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Name :</p>
                  <p className="mt-2 text-xl font-medium text-gray-900">{hatchery.name}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Hatchery name:</p>
                  <p className="mt-2 text-xl font-medium text-gray-900">{hatchery.name}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Address:</p>
                  <p className="mt-2 text-xl font-medium text-gray-900">{hatchery.address}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Contact:</p>
                  <p className="mt-2 text-xl font-medium text-gray-900">{hatchery.contact}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Registered number :</p>
                  <p className="mt-2 text-xl font-medium text-gray-900">{hatchery.registeredNumber}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Status:</p>
                  <span
                    className={`inline-flex mt-2 px-4 py-1.5 rounded-full text-sm font-medium ${
                      hatchery.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {hatchery.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Flocks Detail View */
          <>
            {/* Title + Add Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">All Flock Details</h2>
                <p className="text-gray-600 mt-1">View and manage all registered flocks</p>
              </div>

              <Button
                onClick={() => setIsAddFlockModalOpen(true)}
                className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition"
              >
                + Add Flock Details
              </Button>
            </div>

            {/* Flocks Table Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6">
                <Table
                  data={mockFlockData}
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
                        return <span className="font-semibold text-gray-900">{row.flockSize}</span>;
                      case 'Fertility rate (%)':
                      case 'Hatchability rate (%)':
                      case 'Healthy chick rate (%)':
                        return <span className="text-green-700 font-medium">{row[column.toLowerCase().replace(/ \(.*\)/g, '').replace(/ /g, '')]}%</span>;
                      case 'Mortality rate (%)':
                        return <span className="text-red-700 font-medium">{row.mortalityRate}%</span>;
                      case 'Healthy adults':
                        return <span className="font-semibold text-gray-900">{row.healthyAdults}</span>;
                      case 'Egg Count':
                        return <span className="font-semibold text-gray-900">{row.eggCount}</span>;
                      default:
                        return '-';
                    }
                  }}
                />
              </div>
            </div>
          </>
        )}

        {/* Add Flock Modal */}
        <FlockForm
          isOpen={isAddFlockModalOpen}
          onClose={() => setIsAddFlockModalOpen(false)}
        />
      </div>
    </DashboardLayout>
  );
}
