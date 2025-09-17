export default function OpportunitiesTable({ opportunities }) {
  return (
    <div className="p-4">
      <div className="max-h-[400px] overflow-auto overflow-x-auto md:overflow-x-visible border rounded-md">
        <table className="min-w-[600px] w-full border-collapse text-xs sm:text-sm md:text-base">
          <thead>
            <tr className="bg-gray-100 text-left align-top py-1">
              <th className="py-2 pl-2">Name</th>
              <th className="py-2">Stage</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Account</th>
            </tr>
          </thead>
          <tbody>
            {opportunities.map((o) => (
              <tr key={o.id}>
                <td className="py-2 pl-2">{o.name}</td>
                <td className="py-2">{o.stage}</td>
                <td className="py-2">{o.amount || "-"}</td>
                <td className="py-2">{o.accountName}</td>
              </tr>
            ))}
            {opportunities.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No opportunities yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
