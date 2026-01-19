import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#0c1221]/90 backdrop-blur-md py-3 border-b border-white/5"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-2 border-[#D4A017] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#D4A017]"></div>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Lumini
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          <Link
            to="/"
            className="text-white/60 hover:text-white transition-colors text-sm font-medium"
          >
            {t("header.home")}
          </Link>
          <Link
            to="/comment-ca-marche"
            className="text-white/60 hover:text-white transition-colors text-sm font-medium"
          >
            {t("header.howItWorks")}
          </Link>
          <Link
            to="/"
            className="text-white/60 hover:text-white transition-colors text-sm font-medium"
          >
            {t("header.contact")}
          </Link>
        </nav>

        {/* Right side info */}
        <div className="flex items-center gap-4">
          <div className="text-white">
            <CartDrawer />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0c1221] shadow-2xl py-8 border-t border-white/5 h-screen">
          <nav className="container flex flex-col gap-6 text-center">
            <Link
              to="/"
              className="text-white text-xl font-bold py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.home")}
            </Link>
            <Link
              to="/comment-ca-marche"
              className="text-white text-xl font-bold py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.howItWorks")}
            </Link>
            <Link
              to="/"
              className="text-white text-xl font-bold py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
