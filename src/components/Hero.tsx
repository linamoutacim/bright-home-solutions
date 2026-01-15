import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Zap, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const scrollToOffers = () => {
    document.getElementById("offres")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {t("hero.badge")}
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 animate-slide-up">
            {t("hero.title")}{" "}
            <span className="text-gradient">{t("hero.titleAccent")}</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              onClick={scrollToOffers}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-glow transition-all duration-300 hover:scale-105"
            >
              {t("hero.ctaDiscover")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/comment-ca-marche")}
              className="bg-transparent border-accent text-accent hover:bg-accent/10 px-8 py-6 text-lg rounded-xl transition-all duration-300"
            >
              {t("hero.ctaHow")}
            </Button>
          </div>

          {/* Quick benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {[
              { icon: Shield, text: t("hero.benefit1") },
              { icon: Zap, text: t("hero.benefit2") },
              { icon: Clock, text: t("hero.benefit3") },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <item.icon className="w-5 h-5 text-accent" />
                <span className="text-white/90 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Content */}
        <div className="flex-1 relative animate-float">
          <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full scale-75" />
          <div className="relative z-10 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden group">
            <img
              src="/hero-pro.png"
              alt="Lumini Professional Smart Control"
              className="w-full h-full object-cover rounded-[2.5rem] shadow-glow transform transition-transform duration-[4s] group-hover:scale-110"
            />
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent pointer-events-none" />

            {/* Floating badge over image */}
            <div className="absolute -bottom-2 -right-2 p-5 bg-accent rounded-3xl shadow-glow animate-bounce-slow">
              <div className="text-[10px] font-black text-accent-foreground uppercase tracking-tighter">Écosystème</div>
              <div className="text-xl font-black text-accent-foreground leading-none">Pro Control</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToOffers}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
