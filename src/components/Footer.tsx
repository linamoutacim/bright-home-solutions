import { Mail, MessageCircle, CreditCard, Apple, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0c1221] text-white py-16">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full border-2 border-[#D4A017] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#D4A017]"></span>
              </span>
              Lumini
            </h3>
            <p className="text-white/50 text-xs leading-relaxed max-w-xs mb-8">
              Lumini redonne à l'éclairage domestique en alliant technologie radar, économies d'énergie et design moderne. Illuminez votre vie intelligemment.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm mb-6">Liens Rapides</h4>
            <ul className="space-y-4 text-white/40 text-xs font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/comment-ca-marche" className="hover:text-white transition-colors">Fonctionnalités</Link></li>
              <li><Link to="/#offres" className="hover:text-white transition-colors">Notre Histoire</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Support Client</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm mb-6">Légal</h4>
            <ul className="space-y-4 text-white/40 text-xs font-medium">
              <li><Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">CGV</Link></li>
              <li><Link to="/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Retours</Link></li>
            </ul>
          </div>

          {/* Contact or other info */}
          <div className="opacity-0">
            {/* Spacing alignment */}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest">
            © 2024 Lumini. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex items-center gap-4 text-white/30 text-[10px] font-bold">
            PAIEMENT SÉCURISÉ
            <div className="flex gap-2">
              <div className="w-8 h-5 rounded bg-white/5 flex items-center justify-center"><CreditCard className="w-3 h-3 opacity-50" /></div>
              <div className="w-8 h-5 rounded bg-white/5 flex items-center justify-center"><Apple className="w-3 h-3 opacity-50" /></div>
              <div className="w-8 h-5 rounded bg-white/5 flex items-center justify-center"><ShieldCheck className="w-3 h-3 opacity-50" /></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
