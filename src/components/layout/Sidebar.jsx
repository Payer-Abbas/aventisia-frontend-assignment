import React from 'react';
import { 
  Users, 
  Cpu, 
  Library, 
  PlayCircle, 
  Monitor, 
  ListTodo, 
  Zap, 
  Briefcase, 
  Play, 
  ShieldCheck, 
  BookOpen, 
  Key, 
  Settings, 
  Link as LinkIcon, 
  CheckCircle, 
  MoreHorizontal
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, isActive = false, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        flex items-center space-x-3 px-4 py-2 cursor-pointer transition-all rounded-r-full mr-2 relative
        ${isActive ? 'bg-primary/10 text-primary border-l-2 border-primary -ml-px' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}
      `}
    >
      <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-gray-400'}`} />
      <span className={`text-[11px] font-semibold tracking-wide ${isActive ? 'text-primary' : ''}`}>{label}</span>
    </div>
  );
};

const SidebarSection = ({ title, items, activeItem, onItemClick }) => {
  return (
    <div className="mb-6">
      <h3 className="px-5 mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">{title}</h3>
      <div className="space-y-0.5">
        {items.map((item) => (
          <SidebarItem 
            key={item.label} 
            icon={item.icon} 
            label={item.label} 
            isActive={item.label === activeItem} 
            onClick={() => onItemClick(item.label)}
          />
        ))}
      </div>
    </div>
  );
};

const Sidebar = ({ activeView, onViewChange }) => {
  const sections = [
    {
      title: 'My Projects',
      items: [
        { icon: Users, label: 'Agents' },
        { icon: Cpu, label: 'AI Models' },
        { icon: Library, label: 'Library' },
      ]
    },
    {
      title: 'Orchestrator',
      items: [
        { icon: PlayCircle, label: 'Published' },
        { icon: Monitor, label: 'Machines' },
        { icon: ListTodo, label: 'Queues' },
        { icon: Zap, label: 'Triggers' },
        { icon: Briefcase, label: 'Jobs' },
        { icon: Play, label: 'Executions' },
        { icon: ShieldCheck, label: 'Vault' },
        { icon: BookOpen, label: 'Knowledge Base' },
        { icon: Key, label: 'Key Store' },
      ]
    },
    {
      title: 'Admin',
      items: [
        { icon: Settings, label: 'Tenant' },
        { icon: LinkIcon, label: 'Integrations' },
        { icon: CheckCircle, label: 'Quality Assurance' },
      ]
    }
  ];

  return (
    <aside className="w-56 h-[calc(100vh-3rem)] bg-white border-r border-gray-100 flex flex-col py-6 overflow-y-auto no-scrollbar shrink-0 sticky top-12">
      {sections.map((section) => (
        <SidebarSection 
          key={section.title} 
          title={section.title} 
          items={section.items} 
          activeItem={activeView}
          onItemClick={onViewChange}
        />
      ))}
    </aside>
  );
};


export default Sidebar;