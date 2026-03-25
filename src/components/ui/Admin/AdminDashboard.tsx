import { useState, type ReactElement } from "react"
import { navItems } from "../../../data"
import StatsPage        from "./StatsPages"        
import HotelsPage       from "./HotelsPages"       
import ChambresPage     from "./ChambresPages"     
import ReservationsPage from "./ReservationsPages" 
import UsersPage        from "./UsersPages"        

type PageId = "stats" | "hotels" | "chambres" | "reservations" | "users"

const pages: Record<PageId, ReactElement> = {
  stats:        <StatsPage />,
  hotels:       <HotelsPage />,
  chambres:     <ChambresPage />,
  reservations: <ReservationsPage />,
  users:        <UsersPage />,
}

export default function AdminDashboard() {
  const [page, setPage] = useState<PageId>("stats")

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-100 flex flex-col fixed top-0 bottom-0 left-0">
        {/* Logo */}
        <div className="px-5 py-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-800 flex items-center justify-center text-lg">🏨</div>
            <div>
              <p className="text-sm font-extrabold text-gray-800 m-0">Irma</p>
              <p className="text-xs text-gray-400 m-0">Administration</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="p-3 flex-1">
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest px-2 mb-2">Menu</p>
          {navItems.map((item: { id: string; icon: string; label: string }) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id as PageId)}
              className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl mb-0.5 text-sm font-medium border-none cursor-pointer transition-colors
                ${page === item.id
                  ? "bg-blue-50 text-blue-600 font-bold"
                  : "bg-transparent text-gray-500 hover:bg-gray-50"
                }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="px-5 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-700">EA</div>
            <div>
              <p className="text-xs font-semibold text-gray-700 m-0">Emma Admin</p>
              <p className="text-[11px] text-gray-400 m-0">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-56 flex-1 p-7">
        {pages[page]}
      </main>
    </div>
  )
}