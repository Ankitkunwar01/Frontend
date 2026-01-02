'use client';

import DashboardLayout from '@/components/admin/DashboardLayout';
import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';
import Pagination from '@/components/ui/Pagination'; // Make sure this is the updated minimal version
import { useState } from 'react';

const mockUsers = [
  // Your 15 mock users...
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Admin', status: 'Active' },
  { id: 5, name: 'Charlie Lee', email: 'charlie@example.com', role: 'Manager', status: 'Active' },
   { id: 6, name: 'David Wilson', email: 'david@example.com', role: 'Viewer', status: 'Active' },
  { id: 7, name: 'Eva Davis', email: 'eva@example.com', role: 'Admin', status: 'Inactive' },
  { id: 8, name: 'Frank Miller', email: 'frank@example.com', role: 'Manager', status: 'Active' },
  { id: 9, name: 'Grace Taylor', email: 'grace@example.com', role: 'Viewer', status: 'Active' },
  { id: 10, name: 'Henry Anderson', email: 'henry@example.com', role: 'Admin', status: 'Active' },
  { id: 11, name: 'Ivy Thomas', email: 'ivy@example.com', role: 'Manager', status: 'Active' },
  { id: 12, name: 'Jack White', email: 'jack@example.com', role: 'Viewer', status: 'Inactive' },
  { id: 13, name: 'Kate Green', email: 'kate@example.com', role: 'Admin', status: 'Active' },
 
  
  // ... add more to reach ~15 items for multiple pages
  // (you already have duplicates — that's fine for testing)
];

export default function UserManagementPage() {
  const [users] = useState(mockUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [role, setRole] = useState("Moderator"); // Not filtering yet, just UI
  const roles = ["Moderator", "Hatchery Member"];

  const ITEMS_PER_PAGE = 10; // You had this in mind

  // Calculate paginated data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedUsers = users.slice(startIndex, endIndex);

  const totalItems = users.length;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Role Tabs */}
        <div className="flex items-center gap-6">
          <p className="font-medium text-gray-700">Roles</p>
          <div className="flex gap-3">
            {roles.map((item) => (
              <button
                key={item}
                onClick={() => setRole(item)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all
                  ${role === item
                    ? "bg-gray-800 text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
                <p className="text-gray-600 mt-1">Manage system users and permissions</p>
              </div>
              <Button >Add New User</Button>
            </div>
          </div>

          {/* Table + Pagination */}
          <div className="p-6">
            <Table
              data={paginatedUsers}
              columns={['ID', 'Name', 'Email', 'Role', 'Status', 'Actions']}
            />

            {/* Minimal Pagination - Centered, Purple Current Page */}
            <div className="mt-8">
              <Pagination
                currentPage={currentPage}
                totalItems={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                onPageChange={setCurrentPage}
              />
            </div>

            {/* Optional: Page info */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Showing {startIndex + 1}–{Math.min(endIndex, totalItems)} of {totalItems} users
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}