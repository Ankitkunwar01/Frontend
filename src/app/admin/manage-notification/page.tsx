// app/admin/dashboard/page.tsx
import DashboardLayout from '@/components/admin/DashboardLayout';
import OverviewCards from '@/components/admin/OverviewCards';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome to the Hatchery Management System</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <OverviewCards />
        </div>

        {/* Add more sections later */}
      </div>
    </DashboardLayout>
  );
}