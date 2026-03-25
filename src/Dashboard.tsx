import { useState } from 'react';
import Sidebar from './Sidebar'; 
import ReservationsEnCours from './ReservationEnCours';
import Historique from './Historiques';
import Profile from './profile';


// Données initiales vides
const initialReservations: any[] = [];

// Profil utilisateur par défaut
const defaultProfile = {
  name: 'Jean Dupont',
  email: 'jean.dupont@email.com',
  phone: '77 123 45 67',
  address: 'Dakar, Sénégal',
  avatar: 'JD'
};

export default function Dashboard() {
  // ❌ Supprimez 'statistiques' du type
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'reservations' | 'historique' | 'profile'>('reservations');
  const [reservations, setReservations] = useState(initialReservations);
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('profile');
    return saved ? JSON.parse(saved) : defaultProfile;
  });

  const handleUpdateProfile = (newProfile: any) => {
    setProfile(newProfile);
    localStorage.setItem('profile', JSON.stringify(newProfile));
  };

  const handleAddReservation = (newReservation: any) => {
    setReservations([newReservation, ...reservations]);
  };

  const handleUpdateReservation = (updatedReservation: any) => {
    setReservations(reservations.map(res => 
      res.id === updatedReservation.id ? updatedReservation : res
    ));
  };

  const handleCancelReservation = (id: string) => {
    setReservations(reservations.map(res => 
      res.id === id ? { ...res, status: "Annulée" } : res
    ));
  };

  const handleDeleteReservation = (id: string) => {
    if (confirm('Supprimer définitivement cette réservation ?')) {
      setReservations(reservations.filter(res => res.id !== id));
    }
  };

  const formatPrice = (price: number) => price.toLocaleString() + ' FCFA';

  const totalReservations = reservations.filter(r => r.status !== 'Terminée' && r.status !== 'Annulée').length;
  const totalRevenue = reservations.reduce((sum, r) => sum + r.amount, 0);
  const completedReservations = reservations.filter(r => r.status === 'Terminée').length;
  const cancelledReservations = reservations.filter(r => r.status === 'Annulée').length;

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <Sidebar activePage={currentPage} onPageChange={setCurrentPage} />
      <main className="flex-1 overflow-y-auto p-6">
        {/* Tableau de bord */}
        {currentPage === 'dashboard' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
            <p className="text-gray-500">Bienvenue, {profile.name}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-sm border">
                <p className="text-sm text-gray-500">Réservations en cours</p>
                <p className="text-2xl font-bold text-amber-600">{totalReservations}</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border">
                <p className="text-sm text-gray-500">Revenu total</p>
                <p className="text-2xl font-bold text-green-600">{formatPrice(totalRevenue)}</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border">
                <p className="text-sm text-gray-500">Réservations terminées</p>
                <p className="text-2xl font-bold text-blue-600">{completedReservations}</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border">
                <p className="text-sm text-gray-500">Réservations annulées</p>
                <p className="text-2xl font-bold text-red-600">{cancelledReservations}</p>
              </div>
            </div>

            {/* Dernières réservations */}
            {reservations.length > 0 && (
              <div className="bg-white rounded-xl p-5 shadow-sm border">
                <h2 className="font-semibold text-gray-800 mb-3">Dernières réservations</h2>
                <div className="space-y-2">
                  {reservations.slice(0, 5).map(res => (
                    <div key={res.id} className="flex justify-between items-center py-2 border-b">
                      <div>
                        <p className="font-medium">{res.guest}</p>
                        <p className="text-sm text-gray-500">{res.room} • {res.checkIn} → {res.checkOut}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-amber-600">{formatPrice(res.amount)}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          res.status === 'Confirmée' ? 'bg-emerald-100 text-emerald-700' :
                          res.status === 'En cours' ? 'bg-blue-100 text-blue-700' :
                          res.status === 'Terminée' ? 'bg-gray-100 text-gray-600' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {res.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Réservations en cours */}
        {currentPage === 'reservations' && (
          <ReservationsEnCours 
            reservations={reservations}
            onAddReservation={handleAddReservation}
            onUpdateReservation={handleUpdateReservation}
            onCancelReservation={handleCancelReservation}
          />
        )}

        {/* Historique */}
        {currentPage === 'historique' && (
          <Historique 
            reservations={reservations.filter(r => r.status === 'Terminée' || r.status === 'Annulée')}
            onDeleteReservation={handleDeleteReservation}
          />
        )}

        {/* Profil */}
        {currentPage === 'profile' && (
          <Profile 
            profile={profile}
            onUpdateProfile={handleUpdateProfile}
          />
        )}
      </main>
    </div>
  );
}