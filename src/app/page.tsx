import DashboardLayout from '@/components/admin/DashboardLayout';
import OverviewCards from '@/components/admin/OverviewCards';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <OverviewCards />
        </div>
        
        
        {/* Recent Activity Section */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="text-gray-600">
            <p>No recent activity to display.</p>
            {/* Add activity feed components here */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}