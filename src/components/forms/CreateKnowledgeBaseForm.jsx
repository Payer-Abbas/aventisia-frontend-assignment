import React, { useState, useEffect } from 'react';
import Input from '../ui/Input';
import Select from '../ui/Select';

const CreateKnowledgeBaseForm = ({ onSubmit, isOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    vectorStore: 'Qdrant',
    embeddingModel: 'text-embedding-ada-002',
  });

  // Reset form every time the drawer opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', description: '', vectorStore: 'Qdrant', embeddingModel: 'text-embedding-ada-002' });
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="create-kb-form" onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
      <Input
        label="Name (Cannot be edited later)"
        placeholder="Name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <div className="space-y-1.5">
        <label className="block text-sm font-semibold text-gray-700">Description</label>
        <textarea
          name="description"
          rows={4}
          className="block w-full border border-gray-200 rounded-lg text-sm p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-400"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <Select
        label="Vector Store"
        name="vectorStore"
        required
        options={[
          { label: 'Qdrant', value: 'Qdrant' },
          { label: 'Pinecone', value: 'Pinecone' },
          { label: 'Milvus', value: 'Milvus' },
        ]}
        value={formData.vectorStore}
        onChange={handleChange}
      />
      <Select
        label="LLM Embedding Model"
        name="embeddingModel"
        required
        options={[
          { label: 'text-embedding-ada-002', value: 'text-embedding-ada-002' },
          { label: 'text-embedding-3-small', value: 'text-embedding-3-small' },
          { label: 'text-embedding-3-large', value: 'text-embedding-3-large' },
        ]}
        value={formData.embeddingModel}
        onChange={handleChange}
      />
    </form>
  );
};

export default CreateKnowledgeBaseForm;
