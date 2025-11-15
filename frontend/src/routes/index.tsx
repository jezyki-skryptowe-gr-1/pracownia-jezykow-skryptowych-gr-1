import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="w-full h-16 bg-white shadow-sm flex items-center justify-between px-6">
        <h1 className="text-xl font-semibold">Dashboard</h1>

        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-600 hover:text-gray-900">
            This Month
          </button>

          <button className="p-2 rounded-lg hover:bg-gray-200">
            ⚙️
          </button>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="p-6 flex-1 overflow-y-auto space-y-6">

        {/* === Top Tiles (3) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {/* Total Balance */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="text-lg font-semibold text-gray-700">Total Balance</div>
            <div className="text-3xl font-bold mt-2">$1,204.50</div>

            <div className="mt-4 text-sm">
              <div className="text-green-600">Income: $3,000.00</div>
              <div className="text-red-500">Expenses: $1,795.50</div>
            </div>
          </div>

          {/* Budget Progress */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="text-lg font-semibold text-gray-700">Budget Progress</div>
            <div className="text-3xl font-bold text-green-600 mt-2">$500.00</div>

            <div className="text-sm mt-2 text-gray-600">
              $1,500 / $2,000 used
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-xl mt-4">
              <div className="bg-green-500 h-3 rounded-xl" style={{ width: "75%" }}></div>
            </div>
          </div>

          {/* Upcoming Bills */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="text-lg font-semibold text-gray-700">Upcoming Bills</div>

            <div className="text-3xl font-bold mt-2">3</div>
            <div className="text-sm mt-2 text-gray-600">due this week</div>

            <div className="mt-4 text-sm text-blue-600 hover:underline cursor-pointer">
              View All →
            </div>
          </div>

        </div>

        {/* === Middle Tiles (2) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Spending by Category */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-64">
            <div className="text-lg font-semibold text-gray-700 mb-4">
              Spending by Category
            </div>

            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Food</span><span>$180.20</span></li>
              <li className="flex justify-between"><span>Transport</span><span>$90.00</span></li>
              <li className="flex justify-between"><span>Utilities</span><span>$45.00</span></li>
              <li className="flex justify-between"><span>Other</span><span>$230.10</span></li>
            </ul>
          </div>

          {/* Cash Flow Over Time */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-64">
            <div className="text-lg font-semibold text-gray-700 mb-4">
              Cash Flow Over Time
            </div>

            <div className="text-sm text-gray-600">
              (example placeholder chart)
            </div>

            {/* Placeholder chart bar */}
            <div className="flex items-end gap-2 h-32 mt-6">
              {[30, 20, 25, 35, 40, 45].map((h, i) => (
                <div
                  key={i}
                  className="w-6 bg-green-400 rounded-md"
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* === Bottom Table Tile === */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="text-lg font-semibold text-gray-700 mb-4">
            Recent Activity
          </div>

          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2">Date</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              <tr>
                <td className="py-2">Nov 8</td>
                <td>Starbucks</td>
                <td className="text-red-500">- $7.50</td>
              </tr>
              <tr>
                <td className="py-2">Nov 7</td>
                <td>Salary Deposit</td>
                <td className="text-green-600">+ $2,000.00</td>
              </tr>
              <tr>
                <td className="py-2">Nov 5</td>
                <td>Groceries</td>
                <td className="text-red-500">- $82.90</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  )
}
