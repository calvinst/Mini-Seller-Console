import { useState, useEffect } from "react";
import LeadsTable from "./components/LeadsTable";
import LeadDetail from "./components/LeadDetail";
import OpportunitiesTable from "./components/OpportunitiesTable";
import leadsData from "./data/leads.json";

export default function App() {
  const [leads, setLeads] = useState([]);
  const [selected, setSelected] = useState(null);
  const [opps, setOpps] = useState([]);
  const [showLeads, setShowLeads] = useState(true);
  const [showOpps, setShowOpps] = useState(true);

  useEffect(() => {
    // simulate loading
    setTimeout(() => setLeads(leadsData), 800);
  }, []);

  const handleSave = (updated) => {
    setLeads((prev) => prev.map((l) => (l.id === updated.id ? updated : l)));
  };

  const handleConvert = (opportunity) => {
    setOpps((prev) => [...prev, opportunity]);
    setSelected(null); 
  };

  if (!leads.length) return <p className="p-4">Loading leads...</p>;

  return (
    <div className="">
      {/* Show or Hide Leads */}
      <h1 className="flex flex-row items-center text-xl font-bold mt-2 mx-6 gap-2">
        <button className="hover:bg-gray-100 cursor-pointer" onClick={() => setShowLeads(!showLeads)}>
          <span className="mr-2">Leads</span>
          {showLeads ? "↓" : "↑"}
        </button>
      </h1>
      {showLeads && (
        <div>
          <LeadsTable leads={leads} onSelect={setSelected} />
        </div>
      )}
      {/* Show or Hide Opportunities */}
      <h1 className="flex flex-row items-center text-xl font-bold mt-2 mx-6 gap-2">
        <button className="hover:bg-gray-100 cursor-pointer" onClick={() => setShowOpps(!showOpps)}>
          <span className="mr-2">Opportunities</span>
          {showOpps ? "↓" : "↑"}
        </button>
      </h1>
      {showOpps && (
        <div>
          <OpportunitiesTable opportunities={opps} />
        </div>
      )}

      {selected && (
        <LeadDetail lead={selected} onClose={() => setSelected(null)} onSave={handleSave} onConvert={handleConvert} />
      )}
    </div>
  );
}
