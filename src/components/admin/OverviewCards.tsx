import Card from '../ui/Card';
import { 
  LayoutDashboard, 
  User, 
  Network, 
  Building2, 
  Bird 
} from "lucide-react";

const stats = [
  {
    title: 'Total Users',
    value: '124',
    icon: User,
    color: 'bg-blue-500',
    change: '+12%',
  },
  {
    title: 'Breed Standards',
    value: '45',
    icon: Network,
    color: 'bg-green-500',
    change: '+5%',
  },
  {
    title: 'Hatcheries',
    value: '18',
    icon: Building2,
    color: 'bg-purple-500',
    change: '+2%',
  },
  {
    title: 'Active Flocks',
    value: '67',
    icon: Bird,
    color: 'bg-orange-500',
    change: '+8%',
  },
];

export default function OverviewCards() {
  return (
    <>
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold mt-2">{stat.value}</p>
                <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full`}>
                <Icon className="text-white" size={24} />
              </div>
            </div>
          </Card>
        );
      })}
    </>
  );
}