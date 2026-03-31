import React from 'react';
import { Search, Bell, ChevronDown, Rocket, Command } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
    return (
        <header className="bg-secondary text-white h-12 flex items-center justify-between px-4 sticky top-0 z-40 shadow-md">
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <div className="bg-primary p-1.5 rounded-lg">
                        <Rocket className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-sm tracking-tight">Worcspace</span>
                </div>

                <div className="flex items-center space-x-1 cursor-pointer hover:bg-white/10 px-2 py-1 rounded transition-colors group">
                    <span className="text-xs font-semibold text-white/80">Worcspace 1</span>
                    <ChevronDown className="w-3 h-3 text-white/60 group-hover:text-white" />
                </div>
            </div>

            <div className="flex-1 max-w-lg mx-8">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                        <Search className="h-3.5 w-3.5 text-white/40 group-focus-within:text-white/60 transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full bg-white/10 border-transparent rounded-md pl-10 pr-10 py-1.5 text-xs text-white placeholder-white/40 focus:bg-white/20 focus:ring-0 focus:border-transparent transition-all"
                        placeholder="Search..."
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <div className="flex items-center space-x-0.5 border border-white/20 rounded px-1 py-0.5 opacity-50">
                            <Command className="w-2.5 h-2.5" />
                            <span className="text-[10px] font-medium leading-none">K</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="relative text-white/70 hover:text-white transition-colors">
                    <Bell className="w-4 h-4" />
                    <span className="absolute top-0 right-0 block h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-secondary" />
                </button>

                <div className="flex items-center space-x-2 border-l border-white/10 pl-4 cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="h-7 w-7 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold">
                        GK
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;