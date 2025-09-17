import { useState } from "react";

export default function ConvertLeadModal({ lead, onConvert, onClose }) {
  const [stage, setStage] = useState("Prospecting");
  const [amount, setAmount] = useState("");
  const [accountName, setAccountName] = useState(lead.company || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOpportunity = {
      id: Date.now(),
      name: lead.name,
      stage,
      amount: amount || null,
      accountName,
    };
    onConvert(newOpportunity);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Convert Lead</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              value={lead.name}
              disabled
              className="border p-2 w-full rounded bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Account Name</label>
            <input
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              className="border p-2 w-full rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Stage</label>
            <select value={stage} onChange={(e) => setStage(e.target.value)} className="border p-2 w-full rounded">
              <option>Prospecting</option>
              <option>Qualification</option>
              <option>Proposal</option>
              <option>Closed Won</option>
              <option>Closed Lost</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border p-2 w-full rounded"
              placeholder="Optional"
            />
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded hover:bg-gray-100">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
