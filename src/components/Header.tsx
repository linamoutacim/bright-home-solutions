import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { CartDrawer } from "./CartDrawer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOffers = () => {
    document.getElementById("offres")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-md py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className={`text-2xl font-bold transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
            Lumi<span className="text-secondary">ni</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8 mr-4">
            <Link
              to="/#offres"
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white/90"
                }`}
            >
              {t("header.offers")}
            </Link>
            <Link
              to="/comment-ca-marche"
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white/90"
                }`}
            >
              {t("header.howItWorks")}
            </Link>
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white/90"
                }`}
            >
              {t("header.reviews")}
            </Link>
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-white/90"
                }`}
            >
              {t("header.faq")}
            </Link>
            <Button
              onClick={scrollToOffers}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 rounded-lg shadow-sm hover:shadow-glow transition-all"
            >
              {t("header.order")}
            </Button>
          </nav>

          {/* Language Switcher */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className={`font-bold transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
          >
            {i18n.language === "fr" ? "EN" : "FR"}
          </Button>

          {/* Cart Drawer */}
          <div className={`${isScrolled ? "text-foreground" : "text-white"}`}>
            <CartDrawer />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg py-6">
          <nav className="container flex flex-col gap-4">
            <Link
              to="/#offres"
              className="text-foreground font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.offers")}
            </Link>
            <Link
              to="/"
              className="text-foreground font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.reviews")}
            </Link>
            <Link
              to="/"
              className="text-foreground font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("header.faq")}
            </Link>
            <Button
              onClick={scrollToOffers}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full mt-2"
            >
              {t("header.order")}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
