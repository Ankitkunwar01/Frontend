'use client';

import {
    LayoutDashboard,
    User,
    Network,
    Building2,
    Bird,
    BoxIcon,
    Bell,
    Send,
    AlertCircle,
    Info
} from "lucide-react";
import Image from "next/image";


// import { 
//   LayoutDashboard, 
//   UserRound, 
//   Share2, 
//   Warehouse, 
//   Feather 
// } from "lucide-react";

import NavItem from './navigation/NavItem';
import image from '../../../public/image.png';
import LogoutButton from '../../components/shared/LogoutButton';
import { info } from "console";
// 
const navItems = [
    { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Overview' },
    { href: '/admin/user-management', icon: User, label: 'User Management' },
    { href: '/admin/breed-standards', icon: Network, label: 'Breed Standards' },
    { href: '/admin/hatcheries', icon: Building2, label: 'All Hatcheries' },
    { href: '/admin/flock-details', icon: Bird, label: 'Flock Details' },
    { href: '/admin/Simulation', icon: BoxIcon, label: 'Simulation' },
];
const navTools = [
 { href: '/admin/manage-notification', icon: Bell, label: 'Manage Notification' },
    { href: '/admin/manage-reports', icon: Info, label: 'Manage Reports' },
]
const navAccounts = [
 { href: '/(admin)/my_profile', icon: User, label: 'My Profile' },
    { href: '/admin/notification', icon: Bell, label: 'Notification' },
    { href: '/admin/submit-reports', icon: Send, label: 'Submit Report' },
]

// const navItems = [
//     { href: '/', icon: LayoutDashboard, label: 'Overview' },
//     { href: '/admin/user-management', icon: UserRound, label: 'User Management' },
//     { href: '/admin/breed-standards', icon: Share2, label: 'Breed Standards' },
//     { href: '/admin/hatcheries', icon: Warehouse, label: 'All Hatcheries' },
//     { href: '/admin/flock-details', icon: Feather, label: 'Flock Details' },
// ];


export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-900 text-white flex flex-col">
            {/* Logo Section */}
            <div className="p-6 border-b border-gray-800 text-center">
                <div className="p-6 border-b border-gray-800 text-center">
                    <div className="flex items-center justify-center">
                        <Image
                            src={image}
                            alt="Hatchery Logo"
                            width={80}
                            height={80}
                            className="border-4 border-white rounded-full object-cover"
                        />
                    </div>
                </div>

                <p className="text-sm text-gray-400 mt-1">
                    System Administrator
                </p>
            </div>

            {/* Overview Section */}
            <div className="p-6">
                {/* <h2 className="text-lg font-semibold mb-4">Overview</h2> */}
                <nav className="space-y-2">
                    {navItems.map((item) => (
                        <NavItem key={item.href} {...item} />
                    ))}
                </nav>
            </div >
            <div className="border-t border-gray-800">
                <div className="p-6">
                    <p>ADMIN TOOLS</p>
                    <nav className="space-y-2">
                    {navTools.map((item) => (
                        <NavItem key={item.href} {...item} />
                    ))}
                </nav>

                </div>

            </div>

            {/* Logout Section */}
            <div className="mt-auto p-6 border-t border-gray-800 p-6">
                <h5>ACCOUNT</h5>
                <div>
                    <nav className="space-y-2">
                    {navAccounts.map((item) => (
                        <NavItem key={item.href} {...item} />
                    ))}
                </nav>
                </div>
                <LogoutButton />
            </div>
        </aside>
    );
}