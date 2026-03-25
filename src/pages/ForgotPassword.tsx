import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Veuillez entrer votre email.");
      return;
    }
    console.log("Lien de réinitialisation envoyé à :", email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-times">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Réinitialisation du mot de passe</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded">
          Envoyer le lien
        </button>
        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-600">Retour à la connexion</Link>
        </div>
      </form>
    </div>
  );
}