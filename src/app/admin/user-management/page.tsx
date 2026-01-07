'use client';

import DashboardLayout from '@/components/admin/DashboardLayout';
import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';
import Pagination from '@/components/ui/Pagination'; // Make sure this is the updated minimal version
import { useState, useEffect } from 'react';
import CreateUserModal from '@/components/ui/CreateUserModal';
import { Pencil, Trash2 } from 'lucide-react';


const mockUsers = [
  // Your 15 mock users...
  
  { id: 1, name: 'John Doe', email: 'john1@example.com', role: 'Moderator', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane1@example.com', role: 'Moderator', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob1@example.com', role: 'Moderator', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice1@ttttttttttttttttttttttttttexample.com', role: 'Moderator', status: 'Active' },
  { id: 5, name: 'Charlie Lee', email: 'charlie1@example.com', role: 'Moderator', status: 'Active' },
  { id: 6, name: 'David Wilson', email: 'david1@example.com', role: 'Moderator', status: 'Active' },

  { id: 7, name: 'Eva Davis', email: 'eva1@example.com', role: 'Hatchery Member', status: 'Inactive' },
  { id: 8, name: 'Frank Miller', email: 'frank1@example.com', role: 'Hatchery Member', status: 'Active' },
  { id: 9, name: 'Grace Taylor', email: 'grace1@example.com', role: 'Hatchery Member', status: 'Active' },
  { id: 10, name: 'Henry Anderson', email: 'henry1@example.com', role: 'Hatchery Member', status: 'Active' },
  { id: 11, name: 'Ivy Thomas', email: 'ivy1@example.com', role: 'Hatchery Member', status: 'Active' },
  { id: 12, name: 'Jack White', email: 'jack1@example.com', role: 'Hatchery Member', status: 'Inactive' },
  { id: 13, name: 'Kate Green', email: 'kate1@example.com', role: 'Hatchery Member', status: 'Active' },

  { id: 14, name: 'John Doe', email: 'john2@example.com', role: 'Moderator', status: 'Active' },
  { id: 15, name: 'Jane Smith', email: 'jane2@example.com', role: 'Moderator', status: 'Active' },
  { id: 16, name: 'Bob Johnson', email: 'bob2@example.com', role: 'Moderator', status: 'Inactive' },
];



  // ... add more to reach ~15 items for multiple pages
  // (you already have duplicates — that's fine for testing)


export default function UserManagementPage() {
  const [users] = useState(mockUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [role, setRole] = useState("Moderator"); // Not filtering yet, just UI
  const roles = ["Moderator", "Hatchery Member"];
  // Reset page when role changes
  useEffect(() => {
    setCurrentPage(1);
  }, [role]);

  // Filter users based on the selected role
  const filteredUsers = users.filter(user => user.role === role);

  const [open, setOpen] = useState(false);

  const ITEMS_PER_PAGE = 8; 


  // Paginate the filtered users
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  // Total items should also come from filtered users
  const totalItems = filteredUsers.length;

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
                className={`px-6 py-2.5 rounded-lg font-medium transition-all cursor-pointer
                  ${role === item
                    ? "bg-gray-800 text-white shadow-sm "
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
              <Button onClick={() => setOpen(true)}>
                Add New User
              </Button>

              <CreateUserModal
                isOpen={open}
                onClose={() => setOpen(false)}
                defaultRole={role}
              />
            </div>
          </div>

          {/* Table + Pagination */}
          <div className="p-6">
            <Table
              data={paginatedUsers}
              columns={['ID', 'Name', 'Email', 'Role', 'Status', 'Actions']}
              renderCell={(row, column) => {
                switch (column) {
                  case 'ID':
                    return row.id;
                  case 'Name':
                    return row.name;
                  case 'Email':
                    return row.email;
                  case 'Role':
                    return row.role;
                  case 'Status':
                    return (
                      <span
                        className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                          row.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {row.status}
                      </span>
                    );
                  case 'Actions':
                    return (
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => alert(`Edit user ${row.id}`)}
                          className="text-gray-600 hover:text-blue-600 transition"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => alert(`Delete user ${row.id}`)}
                          className="text-gray-600 hover:text-red-600 transition"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    );
                  default:
                    return '-';
                }
              }}
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