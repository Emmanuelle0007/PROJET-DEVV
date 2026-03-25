import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, LineChart, Line, Legend,
  PieChart, Pie, Cell
} from "recharts"
import StatCard from "../StatCard"
import { revenusData, occupationData, pieData, PIE_COLORS } from "../../../data"

export default function StatsPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-1">Dashboard Admin</h2>
        <p className="text-sm text-gray-400">Vue globale — Mars 2025</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard title="Revenus totaux"  value="€ 904 K" icon="💰" bg="bg-green-100"  trend="+22% vs 2024"      trendUp />
        <StatCard title="Réservations"    value="804"     icon="📋" bg="bg-blue-100"   trend="+11% vs 2024"      trendUp />
        <StatCard title="Hôtels actifs"   value="4 / 5"  icon="🏨" bg="bg-purple-100" trend="1 en maintenance"  trendUp={false} />
        <StatCard title="Occupation moy." value="73%"    icon="📈" bg="bg-yellow-100" trend="+6 pts vs 2024"    trendUp />
      </div>

      {/* Line Chart */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-4">Revenus mensuels vs objectif</p>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={revenusData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="mois" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} tickFormatter={(v: number) => `${(v / 1000).toFixed(0)}k`} />
           <Tooltip formatter={(v: any) => `€ ${Number(v).toLocaleString()}`} />
            <Legend />
            <Line type="monotone" dataKey="revenus"  stroke="#3B82F6" strokeWidth={2} dot={false} name="Revenus" />
            <Line type="monotone" dataKey="objectif" stroke="#D1D5DB" strokeWidth={2} dot={false} strokeDasharray="5 5" name="Objectif" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar + Pie */}
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <p className="text-sm font-semibold text-gray-700 mb-4">Taux d'occupation par hôtel</p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={occupationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="hotel" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} unit="%" />
           <Tooltip formatter={(v: any) => `${v}%`} />


              <Bar dataKey="taux" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <p className="text-sm font-semibold text-gray-700 mb-4">Statut des réservations</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={3} dataKey="value">
                {pieData.map((_: unknown, i: number) => <Cell key={i} fill={PIE_COLORS[i]} />)}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}