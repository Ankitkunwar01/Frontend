'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

interface FlockFormProps {
  isOpen: boolean;
  onClose: () => void;
   defaultRole?: string;
}

export default function FlockForm({ isOpen, onClose }: FlockFormProps) {
  if (!isOpen) return null;

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission here
    console.log('Flock details submitted');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-8 py-5">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-purple-100 p-3">
              <svg
                className="h-6 w-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                Add Flock Detail
              </h2>
              <p className="text-sm text-gray-500">
                Record detailed information about a new flock
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-8">
          <div className="space-y-6">
            {/* Recent Hatcheries Tabs (optional - you can make this dynamic) */}
            <div className="flex flex-wrap gap-2">
              {['kathmandu poultry', 'Lalitpur poultry', 'Ram lal poultry', 'Shyam poultry', 'Kalu Ram poultry'].map((name) => (
                <button
                  key={name}
                  type="button"
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Hatchery Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Latest Hatchery (Selection)
              </label>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200">
                <option>Select a hatchery</option>
                {/* Populate options dynamically */}
              </select>
            </div>

            {/* Grid Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Male chicks <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Female chicks <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Breed <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                >
                  <option>Choose a breed</option>
                  {/* Add breed options */}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Source <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                >
                  <option>Local</option>
                  <option>Imported</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Purpose of Selection <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                >
                  <option>Layer</option>
                  <option>Broiler</option>
                  <option>Breeder</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Placement <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  defaultValue="2025-12-30"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  defaultValue="2025-12-30"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Shipment
                </label>
                <input
                  type="date"
                  defaultValue="2025-12-30"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                />
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-10 flex justify-end gap-4 border-t border-gray-200 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-black px-8 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
            >
              Add Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}