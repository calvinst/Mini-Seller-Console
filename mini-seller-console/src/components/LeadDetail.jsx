// LeadDetail.jsx
import { useState, useEffect } from "react";
import ConvertLeadModal from "./ConvertLeadModal";

export default function LeadDetail({ lead, onClose, onSave, onConvert }) {
  const [email, setEmail] = useState(lead.email);
  const [status, setStatus] = useState(lead.status);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setEmail(lead.email);
    setStatus(lead.status);
    setError("");
  }, [lead]);

  const handleSave = () => {
    if (error || !email) return;
    onSave({ ...lead, email, status });
    onClose();
  };

  return (
    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg p-4 flex flex-col">
      <h2 className="text-xl mb-4">Lead Detail</h2>

      <div className="flex-1 overflow-y-auto">
        <p>
          <strong>Name:</strong> {lead.name}
        </p>
        <p>
          <strong>Company:</strong> {lead.company}
        </p>

        {/*E-mail */}
        <label className="block mt-4">Email</label>
        <input
          type="email"
          className="border p-2 w-full rounded"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (!e.target.validity.valid) {
              setError("E-mail inválido");
            } else {
              setError("");
            }
          }}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        {/* Status */}
        <label className="block mt-4">Status</label>
        <select className="border p-2 w-full rounded" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="new">new</option>
          <option value="contacted">contacted</option>
          <option value="qualified">qualified</option>
        </select>
      </div>

      {/* Actions*/}
      <div className="flex gap-2 mt-6">
        <button
          onClick={handleSave}
          disabled={!!error || !email}
          className={`px-3 py-2 rounded ${
            error || !email
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Save
        </button>
        <button onClick={onClose} className="border px-3 py-2 rounded hover:bg-gray-100">
          Cancel
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 ml-auto"
        >
          Convert Lead
        </button>

        {showModal && <ConvertLeadModal lead={lead} onConvert={onConvert} onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}
