'use client';

import { X } from 'lucide-react';
import { useState, useEffect } from 'react'; // ← Add useEffect

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export default function CreateUserModal({
  isOpen,
  onClose,
  defaultRole = "Moderator",
}: CreateUserModalProps) {
  const [selectedRole, setSelectedRole] = useState(defaultRole);

  // Sync when the prop changes (e.g., different tab selected)
  useEffect(() => {
    setSelectedRole(defaultRole);
  }, [defaultRole]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold flex items-center gap-2">
              👤 Create New User
            </h2>
            <p className="text-sm text-gray-500">
              Add a new user to the system
            </p>
          </div>

          <button onClick={onClose}>
            <X className="h-5 w-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <Input label="Username" />
          <Input label="Full Name" />
          <Input label="Email" type="email" />

          {/* Role */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
            >
              <option value="Moderator">Moderator</option>
              <option value="Hatchery Member">Hatchery Member</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-100 text-gray-700"
          >
            Cancel
          </button>

          <button className="px-4 py-2 rounded-md bg-black text-white">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

/* Reusable Input */
function Input({ label, type = 'text' }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        className="mt-1 w-full rounded-md bg-gray-100 px-3 py-2 outline-none"
      />
    </div>
  );
}