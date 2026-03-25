import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAbout, setShowAbout] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    console.log("Connexion avec :", email, password);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#4B4866]">
      {/* NAVBAR */}
      <nav className="flex justify-end px-8 py-4">
        <button
          onClick={() => setShowAbout(!showAbout)}
          className="text-white/80 hover:text-orange-400 text-sm font-medium transition-colors duration-200 underline underline-offset-4"
        >
          À propos
        </button>
      </nav>

      {/* ABOUT MODAL */}
      {showAbout && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowAbout(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-4 p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
            >
              ✕
            </button>

            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                <svg viewBox="0 0 64 64" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="20" width="48" height="36" rx="3" fill="#f97316" opacity="0.15"/>
                  <rect x="12" y="24" width="40" height="32" rx="2" fill="#f97316" opacity="0.3"/>
                  <rect x="16" y="8" width="32" height="16" rx="2" fill="#f97316" opacity="0.5"/>
                  <rect x="20" y="4" width="24" height="8" rx="2" fill="#f97316"/>
                  <rect x="18" y="32" width="8" height="8" rx="1" fill="#f97316"/>
                  <rect x="38" y="32" width="8" height="8" rx="1" fill="#f97316"/>
                  <rect x="28" y="34" width="8" height="22" rx="1" fill="#f97316" opacity="0.6"/>
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
              À propos du projet
            </h2>
            <p className="text-center text-orange-400 font-medium mb-6 text-sm">
              Système de réservation hôtelière
            </p>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="bg-orange-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                  <span>🏨</span> Le projet
                </h3>
                <p>
                  Notre plateforme vous permet de rechercher, comparer et réserver
                  des hôtels facilement. Profitez d'une expérience fluide pour
                  planifier vos séjours, gérer vos réservations et accéder à vos
                  confirmations en temps réel.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                  <span>🔐</span> Connexion
                </h3>
                <p>
                  Connectez-vous avec votre adresse email et mot de passe pour
                  accéder à votre espace personnel, consulter vos réservations
                  et gérer votre profil en toute sécurité.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-800 mb-1 flex items-center gap-2">
                  <span>✍️</span> Inscription
                </h3>
                <p>
                  Créez votre compte gratuitement en quelques secondes. Renseignez
                  vos informations de base et commencez immédiatement à réserver
                  l'hôtel de vos rêves partout dans le monde.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowAbout(false)}
              className="mt-6 w-full bg-orange-400 hover:bg-orange-500 text-white py-2.5 rounded-full text-sm font-medium transition"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* MAIN */}
      <div className="flex-1 flex items-center justify-center gap-10 px-10">
        {/* LEFT SIDE */}
        <div className="flex items-center justify-center bg-gray-100 rounded-[28px] p-8 w-[360px] h-[480px]">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-full">
            <h3 className="text-orange-400 font-semibold mb-2">
              🏨 HôtelBook
            </h3>

            <p className="text-gray-400 text-sm mb-1">Bienvenue !!!</p>

            {/* Connexion title + icône arrondie et réduite */}
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-3xl font-bold">Connexion</h2>
              {/* Icône réduite + arrondie dans un cercle */}
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 overflow-hidden border border-orange-200">
                <svg
                  viewBox="0 0 48 48"
                  className="w-5 h-5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="16" width="40" height="28" rx="3" fill="#fed7aa"/>
                  <rect x="10" y="20" width="28" height="24" rx="2" fill="#fb923c"/>
                  <rect x="14" y="6" width="20" height="12" rx="2" fill="#fdba74"/>
                  <rect x="18" y="2" width="12" height="6" rx="1" fill="#f97316"/>
                  <rect x="8" y="26" width="7" height="7" rx="1" fill="white" opacity="0.7"/>
                  <rect x="33" y="26" width="7" height="7" rx="1" fill="white" opacity="0.7"/>
                  <rect x="20" y="28" width="8" height="16" rx="1" fill="white" opacity="0.5"/>
                </svg>
              </div>
            </div>

            {error && <p className="text-red-500 mb-3">{error}</p>}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="test@gmail.com"
                  className="w-full p-3 mt-1 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-orange-300 transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <label>Mot de passe</label>
                  <Link
                    to="/reset-password"
                    className="text-orange-400 hover:text-orange-500 hover:underline transition-colors duration-200 cursor-pointer font-medium"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full p-3 mt-1 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-orange-300 transition"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-orange-400 hover:bg-orange-500 active:scale-95 text-white py-3 rounded-full transition-all duration-200 font-semibold tracking-wide"
              >
                SE CONNECTER
              </button>
            </form>

            <p className="text-center text-gray-400 text-sm mt-6">
              Pas encore de compte ?{" "}
              <Link to="/register" className="text-orange-400 font-medium hover:underline">
                S'inscrire
              </Link>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center justify-center gap-4 bg-[#EAD7C9] rounded-[28px] p-8 w-[360px] h-[480px]">

          {/* Cadre bleu autour de l'illustration — même taille que connexion */}
          <div className="bg-[#dbeafe] rounded-2xl p-4 shadow-md w-full flex-1 flex items-center justify-center">
            <svg
              viewBox="30 20 260 230"
              className="w-full drop-shadow-md"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="270" cy="40" r="22" fill="#fde68a"/>
              <circle cx="280" cy="33" r="16" fill="#dbeafe"/>
              <circle cx="30" cy="30" r="2" fill="#fde68a"/>
              <circle cx="60" cy="20" r="1.5" fill="#fde68a"/>
              <circle cx="100" cy="35" r="1.5" fill="#fde68a"/>
              <circle cx="200" cy="25" r="2" fill="#fde68a"/>
              <rect x="0" y="220" width="320" height="60" fill="#86efac"/>
              <rect x="80" y="80" width="160" height="145" rx="4" fill="#e2e8f0"/>
              <polygon points="60,80 160,30 260,80" fill="#f97316"/>
              <line x1="160" y1="30" x2="160" y2="10" stroke="#374151" strokeWidth="2"/>
              <polygon points="160,10 178,18 160,26" fill="#f97316"/>
              <rect x="115" y="90" width="90" height="22" rx="3" fill="#f97316"/>
              <text x="160" y="106" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">HÔTEL</text>
              <rect x="100" y="125" width="25" height="20" rx="2" fill="#bfdbfe"/>
              <rect x="148" y="125" width="25" height="20" rx="2" fill="#fde68a"/>
              <rect x="196" y="125" width="25" height="20" rx="2" fill="#bfdbfe"/>
              <rect x="100" y="158" width="25" height="20" rx="2" fill="#fde68a"/>
              <rect x="148" y="158" width="25" height="20" rx="2" fill="#bfdbfe"/>
              <rect x="196" y="158" width="25" height="20" rx="2" fill="#fde68a"/>
              <rect x="140" y="185" width="40" height="40" rx="3" fill="#92400e"/>
              <circle cx="174" cy="207" r="2.5" fill="#fbbf24"/>
              <path d="M140,185 Q160,170 180,185" fill="#b45309"/>
              <rect x="150" y="220" width="20" height="60" fill="#d1d5db"/>
              <rect x="55" y="195" width="8" height="28" fill="#92400e"/>
              <ellipse cx="59" cy="185" rx="18" ry="22" fill="#16a34a"/>
              <rect x="255" y="195" width="8" height="28" fill="#92400e"/>
              <ellipse cx="259" cy="185" rx="18" ry="22" fill="#16a34a"/>
              <ellipse cx="60" cy="65" rx="28" ry="14" fill="white" opacity="0.8"/>
              <ellipse cx="80" cy="60" rx="20" ry="12" fill="white" opacity="0.8"/>
              <ellipse cx="220" cy="55" rx="24" ry="12" fill="white" opacity="0.7"/>
            </svg>
          </div>

          <div className="text-center">
            <h2 className="text-lg font-bold text-[#4B4866] mb-0.5">Réservez votre séjour</h2>
            <p className="text-[#7B6F8F] text-xs">Des milliers d'hôtels à portée de clic</p>
          </div>
        </div>
      </div>
    </div>
  );
}
