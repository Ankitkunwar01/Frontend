'use client';

import DashboardLayout from '@/components/admin/DashboardLayout';
import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';

const hatcheries = [
  { id: 1, name: 'Sunrise Hatchery', location: 'California', flocks: 12, status: 'Active' },
  { id: 2, name: 'Golden Eggs Farm', location: 'Texas', flocks: 8, status: 'Active' },
  { id: 3, name: 'Morning Bird Co.', location: 'Florida', flocks: 15, status: 'Active' },
];

export default function HatcheriesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">All Hatcheries</h2>
            <p className="text-gray-600">Manage hatchery locations and details</p>
          </div>
          <Button>Add Hatchery</Button>
        </div>
        
        <div className="card">
          <Table 
            data={hatcheries} 
            columns={['ID', 'Name', 'Location', 'Flock Count', 'Status', 'Actions']}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}