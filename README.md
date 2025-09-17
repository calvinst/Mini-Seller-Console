# Mini Seller Console

This project is a **technical test** I built for a job application.  
The goal was to create a lightweight seller console to triage **Leads** and convert them into **Opportunities**.

---

## 🚀 Features

### Leads
- Load leads from a local JSON file.
- Display in a searchable, filterable, and sortable table.
- Search by **name** or **company**.
- Filter by **status** (`new`, `contacted`, `qualified`).
- Sort by **score** (ascending/descending).
- Responsive layout with horizontal scrolling on mobile.

### Lead Detail
- Slide-over panel when selecting a lead.
- Inline edit of **email** (with validation) and **status**.
- Save and cancel actions with basic error handling.

### Opportunities
- Convert a lead into an **Opportunity** via modal.
- Opportunity fields: `id`, `name`, `stage`, `amount` (optional), `accountName`.
- Opportunities displayed in a simple table.

### UX/States
- Loading state when fetching leads.
- Empty state when no leads are found.
- Basic error handling.
- Smooth handling of ~100 leads.

### Nice-to-Haves
- Responsive design with smaller font sizes on mobile.
- Table scroll support on smaller screens.

---

## 🛠️ Tech Stack
- [React](https://react.dev/) (with Vite)
- [Tailwind CSS](https://tailwindcss.com/)
- Local JSON data (no backend required)

---

## ▶️ How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

---

📌 Notes

This project was built as part of a job application coding test.

The main goal was to demonstrate code structure, clarity, and React + Tailwind skills.
