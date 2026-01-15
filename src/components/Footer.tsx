import { Shield, Truck, RotateCcw, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const guarantees = [
  { icon: Shield, text: "Paiement 100% sécurisé" },
  { icon: Truck, text: "Livraison suivie" },
  { icon: RotateCcw, text: "Satisfait ou remboursé 30j" },
  { icon: Headphones, text: "Support client réactif" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Guarantees bar */}
      <div className="border-b border-white/10">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {guarantees.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm text-primary-foreground/80">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Lumi<span className="text-accent">ni</span>
            </h3>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              La lumière intelligente qui s'adapte à votre vie. Sécurisez votre maison et économisez sur vos factures d'électricité.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link to="/" className="hover:text-accent transition-colors">Accueil</Link></li>
              <li><Link to="/comment-ca-marche" className="hover:text-accent transition-colors">Comment ça marche ?</Link></li>
              <li><Link to="/#offres" className="hover:text-accent transition-colors">Nos offres</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">Suivi de commande</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link to="/mentions-legales" className="hover:text-accent transition-colors">Mentions légales</Link></li>
              <li><Link to="/" className="hover:text-accent transition-colors">CGV</Link></li>
              <li><Link to="/politique-de-confidentialite" className="hover:text-accent transition-colors">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>© 2024 Lumini. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
