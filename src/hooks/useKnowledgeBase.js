import { useState, useMemo } from 'react';
import { INITIAL_DATA } from '../data/mockData';

export const useKnowledgeBase = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [knowledgeBases, setKnowledgeBases] = useState(INITIAL_DATA);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // Filter first
    const filteredData = useMemo(() => {
        return knowledgeBases.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, knowledgeBases]);

    // Then paginate the filtered results
    const totalPages = Math.max(1, Math.ceil(filteredData.length / rowsPerPage));

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * rowsPerPage;
        return filteredData.slice(start, start + rowsPerPage);
    }, [filteredData, currentPage, rowsPerPage]);

    // Reset to page 1 whenever search or rowsPerPage changes
    const handleSearchChange = (term) => {
        setSearchTerm(term);
        setCurrentPage(1);
    };

    const handleRowsPerPageChange = (val) => {
        setRowsPerPage(Number(val));
        setCurrentPage(1);
    };

    const handleCreate = (newData) => {
        const newEntry = {
            id: Date.now(),
            title: newData.name,
            description: newData.description || 'No description provided.',
            date: new Date().toLocaleDateString('en-GB'),
        };
        setKnowledgeBases(prev => [newEntry, ...prev]);
        setCurrentPage(1);
    };

    return {
        searchTerm,
        setSearchTerm: handleSearchChange,
        paginatedData,
        filteredData,
        handleCreate,
        currentPage,
        setCurrentPage,
        totalPages,
        rowsPerPage,
        setRowsPerPage: handleRowsPerPageChange,
    };
};
