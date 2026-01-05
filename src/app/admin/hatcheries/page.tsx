'use client';

import DashboardLayout from '@/components/admin/DashboardLayout';
import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';
import Pagination from '@/components/ui/Pagination';
import { Pencil, Trash2, Eye } from 'lucide-react';
import { useState } from 'react';
import HatcheryForm from '@/components/ui/HatcheryForm';
import FlockForm from '@/components/ui/FlockForm';
import View from '@/components/ui/View';
import { useRouter } from 'next/navigation';

// ... your hatcheries data array remains the same
const hatcheries = [
  {
    id: 1,
    name: 'Ram Poultry Farm',
    address: 'Srijananagar, Bhaktapur',
    registeredNumber: '123-123-412',
    owner: 'Ram doe',
    contact: '9800000000',
    renewalStatus: 'Active',
  },
  {
    id: 2,
    name: 'Sam Poultry Farm',
    address: 'Kathmandu -5',
    registeredNumber: '1234-2324-2',
    owner: 'John doe',
    contact: '9700000000',
    renewalStatus: 'Active',
  },
  {
    id: 3,
    name: 'Poultry Farm',
    address: 'Gongabu-3, Ktm',
    registeredNumber: '5533-22-1-11',
    owner: 'Kel fro',
    contact: '9741000000',
    renewalStatus: 'Active',
  },
  {
    id: 4,
    name: 'Poultry Farm',
    address: 'Sanepa, Laliipur',
    registeredNumber: '123-233-222',
    owner: 'Mani go',
    contact: '9841000000',
    renewalStatus: 'Inactive',
  },
];

export default function HatcheriesPage() {

  const [activeTab, setActiveTab] = useState<'hatchery' | 'flocks'>('hatchery');

  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // Separate states for each modal
  const [isHatcheryModalOpen, setIsHatcheryModalOpen] = useState(false);
  const [isFlockModalOpen, setIsFlockModalOpen] = useState(false);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = hatcheries.slice(startIndex, endIndex);
  const totalItems = hatcheries.length;
  const router = useRouter();
  

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">All Hatcheries</h2>
            <p className="text-gray-600 mt-1">View all registered hatcheries in the system</p>
          </div>

          {/* <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => setIsHatcheryModalOpen(true)}
              className="bg-black text-white hover:bg-gray-800"
            >
              + Add Hatchery Farm
            </Button>

            <Button
              onClick={() => setIsFlockModalOpen(true)}
              className="bg-black text-white hover:bg-gray-800"
            >
              + Add Flock Details
            </Button>
          </div> */}
          <div className="flex gap-4">
            <button
              onClick={() => {
                setActiveTab('hatchery')
                setIsHatcheryModalOpen(true)
              }}
              className={`px-6 py-2.5 rounded-lg font-medium transition ${
                activeTab === 'hatchery'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              + Add Hatchery Farm
            </button>
            <button
              onClick={() => {setActiveTab('flocks')
                setIsFlockModalOpen(true)}
              }
              className={`px-6 py-2.5 rounded-lg font-medium transition ${
                activeTab === 'flocks'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}

            >
              + Add Flock Details
            </button>
          </div>

        </div>

        {/* Table Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            <Table
              data={paginatedData}
              columns={['Name', 'Address', 'Registered number', 'Owner', 'Contact', 'Renewal Status', 'Action']}
              renderCell={(row, column) => {
                // ... your renderCell logic (unchanged)
                switch (column) {
                  case 'Name':
                    return <span className="font-medium text-gray-900">{row.name}</span>;
                  case 'Address':
                    return <span className="text-gray-700">{row.address}</span>;
                  case 'Registered number':
                    return <span className="font-mono text-sm text-gray-600">{row.registeredNumber}</span>;
                  case 'Owner':
                    return <span className="text-gray-700">{row.owner}</span>;
                  case 'Contact':
                    return <span className="text-gray-700">{row.contact}</span>;
                  case 'Renewal Status':
                    return (
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${row.renewalStatus === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                          }`}
                      >
                        {row.renewalStatus}
                      </span>
                    );
                  case 'Action':
                    return (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => router.push(`/admin/hatcheries/${row.id}`)}
                          className="text-blue-600 hover:text-blue-800 transition"
                          title="View Details"
                        >


                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-gray-600 hover:text-blue-600 transition">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button className="text-gray-600 hover:text-red-600 transition">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    );
                  default:
                    return '-';
                }
              }}
            />

            {/* Pagination */}
            {totalItems > ITEMS_PER_PAGE && (
              <div className="mt-8 flex flex-col items-center gap-4">
                <Pagination
                  currentPage={currentPage}
                  totalItems={totalItems}
                  itemsPerPage={ITEMS_PER_PAGE}
                  onPageChange={setCurrentPage}
                />
                <p className="text-sm text-gray-500">
                  Showing {startIndex + 1}–{Math.min(endIndex, totalItems)} of {totalItems} hatcheries
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Individual Modals */}
      <HatcheryForm
        isOpen={isHatcheryModalOpen}
        onClose={() => setIsHatcheryModalOpen(false)}
      />

      <FlockForm
        isOpen={isFlockModalOpen}
        onClose={() => setIsFlockModalOpen(false)}
      />
    </DashboardLayout>
  );
}