# Knowledge Base Dashboard — Aventisia Frontend

A pixel-perfect React UI built from a Figma design, implementing a professional **Knowledge Base management dashboard** with reusable components, clean architecture, and full interactivity.

---

## 🚀 Tech Stack

| Tool | Purpose |
|------|---------|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **Lucide React** | Icon library |
| **Inter (Google Fonts)** | Typography |

---

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| Primary Color | `#4F46E5` (Indigo) |
| Secondary Color | `#1E1B4B` (Dark Navy) |
| Font | Inter (300–800) |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── cards/
│   │   └── KnowledgeCard.jsx       # Card displaying a KB item
│   ├── forms/
│   │   └── CreateKnowledgeBaseForm.jsx  # Form for creating a KB entry
│   ├── layout/
│   │   ├── Header.jsx              # Top navigation bar
│   │   └── Sidebar.jsx             # Left navigation sidebar
│   └── ui/                         # Reusable atom components
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Select.jsx
│       ├── Textarea.jsx
│       ├── CreateDrawer.jsx        # Generic slide-in drawer container
│       ├── EmptyPlaceholder.jsx    # Reusable empty/coming-soon state
│       └── Pagination.jsx          # Fully functional pagination footer
├── data/
│   └── mockData.js                 # Initial mock KB entries (data layer)
├── hooks/
│   └── useKnowledgeBase.js         # Business logic: filtering + pagination
├── pages/
│   └── Home.jsx                    # Main orchestrator page
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🏗️ Architecture Principles

### Separation of Concerns
Each layer has a single responsibility:

- **`src/data/`** — Raw data only, no logic
- **`src/hooks/`** — Business logic (filtering, pagination, CRUD)
- **`src/components/ui/`** — Reusable, prop-driven UI atoms
- **`src/components/forms/`** — Form fields and validation
- **`src/components/layout/`** — Page structure (Header, Sidebar)
- **`src/pages/`** — Orchestration only; assembles components and hooks

### Reusability
- `EmptyPlaceholder` is used for **both** "No search results" and "Coming Soon" sidebar views — driven entirely by props
- `CreateDrawer` is a **generic container** — any form can be injected as `children`
- `Pagination` is self-contained; accepts only `rowCount`, `currentPage`, `totalPages`, etc.
- `Button`, `Input`, `Select`, `Textarea` are **controlled atoms** with consistent focus/error states

---

## ✨ Features

### Screen 1 — Knowledge Base Dashboard
- 📋 **Card grid** showing Knowledge Base entries (3-column responsive layout)
- 🔍 **Real-time search** filtering by title or description
- ➕ **Create New** button opens a slide-in drawer
- 📄 **Pagination** — change rows per page (10/20/50), navigate pages, auto-reset on search
- 🔢 **Dynamic row count** in the footer reflects current filtered results

### Screen 2 — Create New Drawer
- 📝 Form fields: Name, Description, Vector Store (dropdown), LLM Embedding Model (dropdown)
- ✅ Required field validation
- 🔄 **Auto-reset** — all fields clear when the drawer is reopened
- Submitting a new entry **instantly adds it** to the card grid

### Sidebar Navigation
- ✅ **Knowledge Base** — active, fully functional view
- 🚀 **All other items** — display a "Coming Soon" placeholder with a back button

---

## 🧩 Component API Reference

### `<Button>`
```jsx
<Button variant="primary" size="md" icon={Plus}>Create New</Button>
// variants: primary | secondary | outline | ghost | icon
// sizes: sm | md | lg
```

### `<Input>`
```jsx
<Input label="Name" placeholder="Enter name" required error="Required" icon={Search} />
```

### `<Textarea>`
```jsx
<Textarea label="Description" rows={4} placeholder="Enter description" />
```

### `<Select>`
```jsx
<Select label="Vector Store" options={[{ label: 'Qdrant', value: 'Qdrant' }]} />
```

### `<EmptyPlaceholder>`
```jsx
<EmptyPlaceholder
  icon={Rocket}
  title="Agents"
  description="Coming soon"
  showBackButton
  onBackClick={() => setActiveView('Knowledge Base')}
/>
```

### `<Pagination>`
```jsx
<Pagination
  rowCount={filteredData.length}
  currentPage={currentPage}
  totalPages={totalPages}
  rowsPerPage={rowsPerPage}
  onPageChange={setCurrentPage}
  onRowsPerPageChange={setRowsPerPage}
/>
```

### `<CreateDrawer>`
```jsx
<CreateDrawer isOpen title="Create New KB" subtitle="..." formId="create-kb-form" onClose={...}>
  <CreateKnowledgeBaseForm isOpen={isOpen} onSubmit={handleCreate} />
</CreateDrawer>
```

### `useKnowledgeBase()` hook
```js
const {
  searchTerm, setSearchTerm,   // search control
  filteredData,                 // all matched items (for row count)
  paginatedData,                // current page slice (for card grid)
  handleCreate,                 // add a new entry
  currentPage, setCurrentPage,
  totalPages,
  rowsPerPage, setRowsPerPage,
} = useKnowledgeBase();
```

---

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 📐 Design Fidelity

This project replicates the provided Figma screens with strict adherence to:
- Exact hex color values (`#4F46E5`, `#1E1B4B`)
- Inter font across all text elements
- Consistent spacing scale (Tailwind: `p-8`, `gap-6`, `space-x-3`)
- Pixel-accurate card layout, sidebar widths, and header height (`h-12`)
- Smooth micro-animations on hover (`transition-all`, `active:scale-95`)
