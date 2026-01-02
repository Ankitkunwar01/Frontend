'use client';

import DashboardLayout from '@/components/admin/DashboardLayout';
import Button from '@/components/ui/Button';
import Pagination from '@/components/ui/Pagination';
import { Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';

const breedStandards = [
  { breed: 'Breed1', fertility: '80%', hatchability: '82%', mortality: '4%', healthy: '95%' },
  { breed: 'Breed2', fertility: '78%', hatchability: '87%', mortality: '2%', healthy: '91%' },
  { breed: 'Breed3', fertility: '90%', hatchability: '91%', mortality: '3%', healthy: '94%' },
  { breed: 'Breed4', fertility: '92%', hatchability: '89%', mortality: '2%', healthy: '89%' },
  { breed: 'Breed4', fertility: '92%', hatchability: '89%', mortality: '2%', healthy: '89%' },
  { breed: 'Breed4', fertility: '92%', hatchability: '89%', mortality: '2%', healthy: '89%' },
  { breed: 'Breed4', fertility: '92%', hatchability: '89%', mortality: '2%', healthy: '89%' },
  { breed: 'Breed4', fertility: '92%', hatchability: '89%', mortality: '2%', healthy: '89%' },
  // Add more breeds here if you want multiple pages (e.g., 15+ items)
  // Example extra ones:
  // { breed: 'Breed5', fertility: '85%', hatchability: '88%', mortality: '3%', healthy: '92%' },
  // ... up to 15+ for testing pagination
];

export default function BreedStandardsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5; // You can change this to 10 if preferred

  // Calculate paginated data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedBreeds = breedStandards.slice(startIndex, endIndex);

  const totalItems = breedStandards.length;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header + Add Button */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Breed Standards Management</h2>
            <p className="text-gray-600 mt-1">
              Configure baseline statistics for different chicken breeds
            </p>
          </div>

          <Button className="bg-black text-white hover:bg-gray-800 flex items-center gap-2">
            <span className="text-lg">+</span> Add Breed
          </Button>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-sm border-2 border-purple-200 overflow-hidden">
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Breed name
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Fertility %
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Hatchability %
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Mortality %
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Healthy chicks %
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedBreeds.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.breed}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.fertility}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.hatchability}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.mortality}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {item.healthy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-3">
                        <button className="text-gray-600 hover:text-blue-600 transition">
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button className="text-gray-600 hover:text-red-600 transition">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Section */}
          <div className="py-6 bg-white">
            <div className="flex flex-col items-center gap-4">
              {/* Your reusable Pagination component */}
              <Pagination
                currentPage={currentPage}
                totalItems={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                onPageChange={setCurrentPage}
              />

              {/* Optional: Showing X-Y of Z */}
              <p className="text-center text-sm text-gray-500">
                Showing {startIndex + 1}–{Math.min(endIndex, totalItems)} of {totalItems} breeds
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}