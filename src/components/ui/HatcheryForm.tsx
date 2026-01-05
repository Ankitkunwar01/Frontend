'use client';

import { useEffect } from 'react';

interface HatcheryFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export default function HatcheryForm({ isOpen, onClose }: HatcheryFormProps) {
  

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission (e.g., API call)
    console.log('Form submitted');
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-200 px-6 py-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Add Hatchery Farm
              </h2>
              <p className="text-sm text-gray-500">
                Register a new hatchery farm in the system
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: 'Hatchery Name', required: true },
              { label: 'Registered Number', required: true },
              { label: 'Address', required: true },
              { label: 'Year of Establishment', required: false },
              { label: 'Owner Name', required: false },
              { label: 'Contact Number', required: true },
            ].map(({ label, required }) => (
              <div key={label}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}
                  {required && <span className="text-red-500 ml-1">*</span>}
                </label>
                <input
                  type="text"
                  required={required}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                  placeholder={label === 'Contact Number' ? 'e.g. 98XXXXXXXX' : ''}
                />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-xl">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-sm border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Create Hatchery
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}