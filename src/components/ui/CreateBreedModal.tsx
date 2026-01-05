'use client';

import { X } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useState } from 'react';

interface CreateBreedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate?: (data: BreedFormData) => void; // Optional callback
}

export type BreedFormData = {
  breedName: string;
  fertilityRate: string;
  infertilityRate: string;
  eggDamageRate: string;
  hatchabilityRate: string;
  healthyChickRate: string;
  unhealthyChickRate: string;
  mortalityRate: string;
  healthyAdultRate: string;
  unhealthyAdultRate: string;
};

export default function CreateBreedModal({
  isOpen,
  onClose,
  onCreate,
}: CreateBreedModalProps) {
  const [formData, setFormData] = useState<BreedFormData>({
    breedName: '',
    fertilityRate: '',
    infertilityRate: '',
    eggDamageRate: '',
    hatchabilityRate: '',
    healthyChickRate: '',
    unhealthyChickRate: '',
    mortalityRate: '',
    healthyAdultRate: '',
    unhealthyAdultRate: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate?.(formData);
    onClose(); // Close modal after create
  };

  const updateField = (field: keyof BreedFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Create New Breed Standard
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <p className="text-sm text-gray-600">
            Enter performance benchmarks for this breed
          </p>

          {/* Breed Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Breed name
            </label>
            <input
              type="text"
              required
              value={formData.breedName}
              onChange={(e) => updateField('breedName', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              placeholder="e.g., Rhode Island Red"
            />
          </div>

          {/* Grid: Two columns */}
          <div className="grid grid-cols-2 gap-4">
            {/* Fertility & Infertility */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fertility Rate (%)
              </label>
              <input
                type="text"
                value={formData.fertilityRate}
                onChange={(e) => updateField('fertilityRate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="92%"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Infertility Rate (%)
              </label>
              <input
                type="text"
                value={formData.infertilityRate}
                onChange={(e) => updateField('infertilityRate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="8%"
              />
            </div>

            {/* Egg Damage & Hatchability */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Egg Damage Rate (%)
              </label>
              <input
                type="text"
                value={formData.eggDamageRate}
                onChange={(e) => updateField('eggDamageRate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="2%"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hatchability Rate (%)
              </label>
              <input
                type="text"
                value={formData.hatchabilityRate}
                onChange={(e) => updateField('hatchabilityRate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="89%"
              />
            </div>

            {/* Healthy/Unhealthy Chick */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Healthy Chick Rate (%)
              </label>
              <input
                type="text"
                value={formData.healthyChickRate}
                onChange={(e) => updateField('healthyChickRate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="95%"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Unhealthy Chick Rate (%)
              </label>
              <input
                type="text"
                value={formData.unhealthyChickRate}
                onChange={(e) => updateField('unhealthyChickRate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="5%"
              />
            </div>

            {/* Mortality & Healthy Adult */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mortality Rate (%)
              </label>
              <input
                type="text"
                value={formData.mortalityRate}
                onChange={(e) => updateField('mortalityRate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="4%"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Healthy Adult Rate (%)
              </label>
              <input
                type="text"
                value={formData.healthyAdultRate}
                onChange={(e) => updateField('healthyAdultRate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="96%"
              />
            </div>

            {/* Unhealthy Adult */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Unhealthy Adult Rate (%)
              </label>
              <input
                type="text"
                value={formData.unhealthyAdultRate}
                onChange={(e) => updateField('unhealthyAdultRate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="4%"
              />
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <Button type="submit" className="px-6 py-2.5">
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}