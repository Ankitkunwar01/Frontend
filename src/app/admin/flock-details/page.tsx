'use client';

import DashboardLayout from '@/components/admin/DashboardLayout';
import Button from '@/components/ui/Button';
import Table from '@/components/ui/Table';

const flocks = [
  { id: 1, name: 'Flock Alpha', breed: 'Leghorn', hatchery: 'Sunrise', size: 1200, age: '18 weeks' },
  { id: 2, name: 'Flock Beta', breed: 'Rhode Island', hatchery: 'Golden Eggs', size: 850, age: '24 weeks' },
  { id: 3, name: 'Flock Gamma', breed: 'Plymouth', hatchery: 'Morning Bird', size: 950, age: '12 weeks' },
];

export default function FlockDetailsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Flock Details</h2>
            <p className="text-gray-600">Monitor and manage all poultry flocks</p>
          </div>
          <Button>Add Flock</Button>
        </div>
        
        <div className="card">
          <Table 
            data={flocks} 
            columns={['ID', 'Flock Name', 'Breed', 'Hatchery', 'Size', 'Age', 'Actions']}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}