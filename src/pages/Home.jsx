import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import Button from '../components/ui/Button';
import KnowledgeCard from '../components/cards/KnowledgeCard';
import CreateDrawer from '../components/ui/CreateDrawer';
import Pagination from '../components/ui/Pagination';
import EmptyPlaceholder from '../components/ui/EmptyPlaceholder';
import CreateKnowledgeBaseForm from '../components/forms/CreateKnowledgeBaseForm';
import { useKnowledgeBase } from '../hooks/useKnowledgeBase';
import { Plus, Search, Rocket, BookOpen } from 'lucide-react';

function Home() {
    const [activeView, setActiveView] = useState('Knowledge Base');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // All data logic is handled by the custom hook
    const { searchTerm, setSearchTerm, filteredData, paginatedData, handleCreate, currentPage, setCurrentPage, totalPages, rowsPerPage, setRowsPerPage } = useKnowledgeBase();

    const onCreateSubmit = (formData) => {
        handleCreate(formData);
        setIsDrawerOpen(false);
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-gray-50/30">
            <Header />
            <div className="flex flex-1 overflow-hidden">
                <Sidebar activeView={activeView} onViewChange={setActiveView} />
                <main className="flex-1 overflow-y-auto no-scrollbar flex flex-col">
                    {activeView === 'Knowledge Base' ? (
                        <div className="flex flex-col flex-1">
                            <div className="p-8 max-w-7xl mx-auto w-full flex-grow">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
                                    <h1 className="text-xl font-bold text-gray-900 tracking-tight">Knowledge Base</h1>
                                    <div className="flex items-center space-x-3">
                                        <div className="relative w-64 group">
                                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                                <Search className="h-4 w-4 text-gray-300 group-focus-within:text-primary transition-colors" />
                                            </div>
                                            <input
                                                type="text"
                                                className="block w-full bg-white border border-gray-100 rounded-lg pl-10 pr-3 py-1.5 text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all font-medium"
                                                placeholder="Search..."
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                        </div>
                                        <Button
                                            onClick={() => setIsDrawerOpen(true)}
                                            className="bg-primary hover:bg-primary/90 text-white flex items-center h-[34px] px-4 font-semibold text-xs tracking-wide"
                                            icon={Plus}
                                        >
                                            Create New
                                        </Button>
                                    </div>
                                </div>

                                {paginatedData.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {paginatedData.map((item) => (
                                            <KnowledgeCard
                                                key={item.id}
                                                title={item.title}
                                                description={item.description}
                                                date={item.date}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <EmptyPlaceholder
                                        icon={BookOpen}
                                        title="No results found"
                                        description="Try a different search term."
                                    />
                                )}
                            </div>

                            {/* Reusable Pagination footer */}
                            <Pagination
                                rowCount={filteredData.length}
                                currentPage={currentPage}
                                totalPages={totalPages}
                                rowsPerPage={rowsPerPage}
                                onPageChange={setCurrentPage}
                                onRowsPerPageChange={setRowsPerPage}
                            />
                        </div>
                    ) : (
                        <EmptyPlaceholder
                            icon={Rocket}
                            title={activeView}
                            description="Coming soon"
                            showBackButton
                            onBackClick={() => setActiveView('Knowledge Base')}
                        />
                    )}
                </main>
            </div>

            {/* Generic drawer with the form injected as a child */}
            <CreateDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title="Create New Knowledge Base"
                subtitle="Best for quick answers from documents, websites and text files."
                formId="create-kb-form"
            >
                <CreateKnowledgeBaseForm
                    isOpen={isDrawerOpen}
                    onSubmit={onCreateSubmit}
                />
            </CreateDrawer>
        </div>
    );
}

export default Home;