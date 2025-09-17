import { useState, useMemo, useEffect } from "react";

export default function LeadsTable({ leads, onSelect }) {

  // Initialize filters from localStorage, if available
  const [search, setSearch] = useState(() => localStorage.getItem("search") || "");
  const [statusFilter, setStatusFilter] = useState(() => localStorage.getItem("statusFilter") || "");
  const [sortDesc, setSortDesc] = useState(() => JSON.parse(localStorage.getItem("sortDesc") || "true"));

  // Save filters to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("search", search);
    localStorage.setItem("statusFilter", statusFilter);
    localStorage.setItem("sortDesc", JSON.stringify(sortDesc));
  }, [search, statusFilter, sortDesc]);

  const filtered = useMemo(() => {
    return leads
      .filter((l) => [l.name, l.company].some((f) => f.toLowerCase().includes(search.toLowerCase())))
      .filter((l) => (statusFilter ? l.status === statusFilter : true))
      .sort((a, b) => (sortDesc ? b.score - a.score : a.score - b.score));
  }, [leads, search, statusFilter, sortDesc]);

  return (
    <div className="p-4">
      {/* Search / Filter */}
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          placeholder="Search name/company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-1/2 text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-2"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-2"
        >
          <option value="">All</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="qualified">Qualified</option>
        </select>
        <button
          onClick={() => setSortDesc(!sortDesc)}
          className="border rounded text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-2"
        >
          Sort by Score {sortDesc ? "↓" : "↑"}
        </button>
      </div>

      {/* Table */}
      <div className="max-h-[400px] overflow-auto overflow-x-auto md:overflow-x-visible border rounded-md">
        <table className="min-w-[600px] w-full border-collapse text-xs sm:text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 text-left align-top py-1">
              <th className="py-2 pl-2">Name</th>
              <th className="py-2">Company</th>
              <th className="py-2">Email</th>
              <th className="py-2">Source</th>
              <th className="py-2">Score</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => onSelect(lead)}>
                <td className="py-2 pl-2">{lead.name}</td>
                <td className="py-2">{lead.company}</td>
                <td className="py-2">{lead.email}</td>
                <td className="py-2">{lead.source}</td>
                <td className="py-2">{lead.score}</td>
                <td className="py-2">{lead.status}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No leads found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
