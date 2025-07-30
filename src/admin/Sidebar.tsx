import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Users, 
  Heart, 
  Headphones, 
  BarChart3, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  HelpCircle,
  Building2,
  Mail,
  RefreshCw
} from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      icon: BarChart3,
      path: '/admin/dashboard',
      badge: null
    },
    {
      title: 'Disability Cards',
      icon: Users,
      path: '/admin/disabilities',
      badge: 'disabilities'
    },
    {
      title: 'Carers Cards',
      icon: Heart,
      path: '/admin/carers',
      badge: 'carers'
    },
    {
      title: 'Customer Support',
      icon: Headphones,
      path: '/admin/customer-support',
      badge: 'support'
    },
    {
      title: 'Renewals',
      icon: RefreshCw,
      path: '/admin/renewals',
      badge: 'renewals'
    },
    {
      title: 'Partners',
      icon: Building2,
      path: '/admin/partners',
      badge: null
    },
    {
      title: 'Contact Submissions',
      icon: Mail,
      path: '/admin/contact-submissions',
      badge: 'contact'
    },
    {
      title: 'Support',
      icon: HelpCircle,
      path: '/admin/support',
      badge: null,
      disabled: true
    },
    {
      title: 'Settings',
      icon: Settings,
      path: '/admin/settings',
      badge: null
    }
  ];

  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 z-30 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && (
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">UAE</span>
            </div>
            <span className="ml-3 font-semibold text-gray-900">Admin Panel</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${
                item.disabled 
                  ? 'cursor-not-allowed opacity-50' 
                  : isActive
                  ? 'bg-green-100 text-green-800'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={item.disabled ? (e) => e.preventDefault() : undefined}
            >
              <Icon className={`w-5 h-5 ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
              {!isCollapsed && (
                <span className="font-medium">{item.title}</span>
              )}
              {!isCollapsed && item.disabled && (
                <span className="ml-auto text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                  Soon
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
