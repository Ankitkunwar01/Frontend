'use client';

import { X } from 'lucide-react';

interface FlockViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  flock: {
    hatchery: string;
    breed: string;
    flockSize: number;
    fertilityRate: number;
    hatchabilityRate: number;
    healthyChickRate: number;
    mortalityRate: number;
    healthyAdults: number;
    eggCount: number;
  } | null;
}

export default function FlockViewModal({ isOpen, onClose, flock }: FlockViewModalProps) {
  if (!isOpen || !flock) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-8">Flock Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-medium text-gray-600">Hatchery</p>
            <p className="mt-1 text-lg text-gray-900">{flock.hatchery}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Breed</p>
            <p className="mt-1 text-lg text-gray-900">{flock.breed}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Flock Size</p>
            <p className="mt-1 text-lg font-semibold text-gray-900">{flock.flockSize.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Fertility Rate</p>
            <p className="mt-1 text-lg text-green-700">{flock.fertilityRate}%</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Hatchability Rate</p>
            <p className="mt-1 text-lg text-green-700">{flock.hatchabilityRate}%</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Healthy Chick Rate</p>
            <p className="mt-1 text-lg text-green-700">{flock.healthyChickRate}%</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Mortality Rate</p>
            <p className="mt-1 text-lg text-red-700">{flock.mortalityRate}%</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Healthy Adults</p>
            <p className="mt-1 text-lg font-semibold text-gray-900">{flock.healthyAdults.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">Egg Count</p>
            <p className="mt-1 text-lg font-semibold text-gray-900">{flock.eggCount.toLocaleString()}</p>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}