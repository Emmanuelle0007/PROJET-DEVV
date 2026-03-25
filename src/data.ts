import type { Hotel, Chambre, Reservation, User } from "./types"

export const initialHotels: Hotel[] = [
  { id: 1, nom: "Plaza Athénée",   ville: "Paris",     etoiles: 5, chambres: 120, statut: "Actif" },
  { id: 2, nom: "Le Ritz Londres", ville: "Londres",   etoiles: 5, chambres: 98,  statut: "Actif" },
  { id: 3, nom: "Burj Al Arab",    ville: "Dubaï",     etoiles: 5, chambres: 202, statut: "Actif" },
  { id: 4, nom: "Quatre Saisons",  ville: "Bora Bora", etoiles: 4, chambres: 80,  statut: "Maintenance" },
  { id: 5, nom: "Le Savoy",        ville: "Londres",   etoiles: 4, chambres: 150, statut: "Actif" },
]

export const initialChambres: Chambre[] = [
  { id: 1, hotel: "Plaza Athénée",   type: "Suite Présidentielle", prix: 850,  dispo: true  },
  { id: 2, hotel: "Plaza Athénée",   type: "Chambre Deluxe",       prix: 420,  dispo: true  },
  { id: 3, hotel: "Le Ritz Londres", type: "Suite Royale",         prix: 770,  dispo: false },
  { id: 4, hotel: "Burj Al Arab",    type: "Suite Royale Duplex",  prix: 1780, dispo: true  },
  { id: 5, hotel: "Quatre Saisons",  type: "Bungalow Pilotis",     prix: 1120, dispo: false },
  { id: 6, hotel: "Le Savoy",        type: "Chambre Standard",     prix: 390,  dispo: true  },
]

export const initialReservations: Reservation[] = [
  { id: 1, client: "Sophie Martin", hotel: "Plaza Athénée",   chambre: "Suite Présidentielle", arrivee: "15/04/2025", depart: "20/04/2025", montant: 4250, statut: "Confirmé"   },
  { id: 2, client: "James Wilson",  hotel: "Le Ritz Londres", chambre: "Suite de Luxe",        arrivee: "10/05/2025", depart: "15/05/2025", montant: 3850, statut: "En attente" },
  { id: 3, client: "Aisha Diallo",  hotel: "Burj Al Arab",    chambre: "Suite Royale Duplex",  arrivee: "01/06/2025", depart: "05/06/2025", montant: 7120, statut: "Confirmé"   },
  { id: 4, client: "Luca Ferrari",  hotel: "Quatre Saisons",  chambre: "Bungalow Pilotis",     arrivee: "20/07/2025", depart: "27/07/2025", montant: 7840, statut: "En attente" },
  { id: 5, client: "Emma Bernard",  hotel: "Le Savoy",        chambre: "Chambre Standard",     arrivee: "05/03/2025", depart: "08/03/2025", montant: 1170, statut: "Annulé"     },
]

export const initialUsers: User[] = [
  { id: 1, nom: "Sophie Martin", email: "sophie.martin@email.com", role: "Client", reservations: 4, statut: "Actif"  },
  { id: 2, nom: "James Wilson",  email: "james.wilson@email.com",  role: "Client", reservations: 2, statut: "Actif"  },
  { id: 3, nom: "Aisha Diallo",  email: "aisha.diallo@email.com",  role: "Client", reservations: 7, statut: "Actif"  },
  { id: 4, nom: "Luca Ferrari",  email: "luca.ferrari@email.com",  role: "Client", reservations: 1, statut: "Bloqué" },
  { id: 5, nom: "Emma Bernard",  email: "emma.bernard@email.com",  role: "Admin",  reservations: 0, statut: "Actif"  },
]

export const revenusData = [
  { mois: "Jan", revenus: 42000,  objectif: 38000 },
  { mois: "Fév", revenus: 55000,  objectif: 45000 },
  { mois: "Mar", revenus: 48000,  objectif: 50000 },
  { mois: "Avr", revenus: 61000,  objectif: 55000 },
  { mois: "Mai", revenus: 73000,  objectif: 65000 },
  { mois: "Jun", revenus: 88000,  objectif: 75000 },
  { mois: "Jul", revenus: 95000,  objectif: 80000 },
  { mois: "Aoû", revenus: 102000, objectif: 85000 },
  { mois: "Sep", revenus: 79000,  objectif: 78000 },
  { mois: "Oct", revenus: 84000,  objectif: 80000 },
  { mois: "Nov", revenus: 67000,  objectif: 72000 },
  { mois: "Déc", revenus: 110000, objectif: 95000 },
]

export const occupationData = [
  { hotel: "Plaza",     taux: 87 },
  { hotel: "Ritz",      taux: 74 },
  { hotel: "Burj",      taux: 92 },
  { hotel: "4 Saisons", taux: 45 },
  { hotel: "Savoy",     taux: 68 },
]

export const pieData = [
  { name: "Confirmé",   value: 18 },
  { name: "En attente", value: 6  },
  { name: "Annulé",     value: 2  },
]

export const PIE_COLORS = ["#3B82F6", "#F59E0B", "#EF4444"]

export const navItems = [
  { id: "stats",        label: "Dashboard",    icon: "📊" },
  { id: "hotels",       label: "Hôtels",       icon: "🏨" },
  { id: "chambres",     label: "Chambres",     icon: "🛏️" },
  { id: "reservations", label: "Réservations", icon: "📋" },
  { id: "users",        label: "Utilisateurs", icon: "👥" },
]