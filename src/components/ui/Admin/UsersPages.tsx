import { useState } from "react"
import type { User } from "../../../types"
import { initialUsers } from "../../../data"
import Badge from "../../ui/Badge"

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [search, setSearch] = useState("")

  const toggleBlock = (id: number) => setUsers(prev => prev.map(u => u.id === id ? { ...u, statut: u.statut === "Actif" ? "Bloqué" : "Actif" } : u))
  const deleteUser  = (id: number) => setUsers(prev => prev.filter(u => u.id !== id))

  const filtered = users.filter(u =>
    u.nom.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-1">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-extrabold text-gray-800 m-0">Gestion des utilisateurs</h2>
          <p className="text-gray-400 text-xs m-0">{users.length} utilisateurs · {users.filter(u => u.statut === "Bloqué").length} bloqué(s)</p>
        </div>
        <input
          placeholder="Rechercher..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2 text-sm w-60 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="p-4 font-bold text-gray-500">Utilisateur</th>
              <th className="p-4 font-bold text-gray-500">Email</th>
              <th className="p-4 font-bold text-gray-500 text-center">Rôle</th>
              <th className="p-4 font-bold text-gray-500 text-center">Réservations</th>
              <th className="p-4 font-bold text-gray-500 text-center">Statut</th>
              <th className="p-4 font-bold text-gray-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.id} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${u.statut === "Bloqué" ? "bg-red-50/30" : ""}`}>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${u.role === "Admin" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}>
                      {u.nom.split(" ").map((n: string) => n[0]).join("")}
                    </div>
                    <span className="font-bold text-gray-800">{u.nom}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-500">{u.email}</td>
                <td className="p-4 text-center"><Badge label={u.role} /></td>
                <td className="p-4 text-center font-medium">{u.reservations}</td>
                <td className="p-4 text-center"><Badge label={u.statut} /></td>
                <td className="p-4 text-right">
                  <div className="flex gap-2 justify-end">
                    <button onClick={() => toggleBlock(u.id)} className={`px-3 py-1.5 rounded-lg text-xs font-bold border-none cursor-pointer ${u.statut === "Actif" ? "bg-amber-100 text-amber-700" : "bg-green-100 text-green-700"}`}>
                      {u.statut === "Actif" ? "Bloquer" : "Débloquer"}
                    </button>
                    <button onClick={() => deleteUser(u.id)} className="px-3 py-1.5 rounded-lg text-xs font-bold bg-red-50 text-red-600 border-none cursor-pointer hover:bg-red-100">
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
