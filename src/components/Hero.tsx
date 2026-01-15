import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const scrollToOffers = () => {
    document.getElementById("offres")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] bg-[#0c1221] overflow-hidden flex items-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-[#1a233a]/0 via-[#1a233a]/30 to-[#0c1221] pointer-events-none" />

      <div className="container relative z-10 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-md bg-[#ffffff15] border border-[#ffffff20] text-white text-xs font-bold tracking-wider mb-6">
              {t("hero.badge")}
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              {t("hero.title")}{" "}
              <span className="text-[#D4A017]">{t("hero.titleAccent")}</span>
            </h1>

            <p className="text-lg text-white/70 max-w-lg mb-10 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                onClick={scrollToOffers}
                className="bg-[#D4A017] hover:bg-[#B8860B] text-[#0c1221] font-bold px-8 py-7 text-lg rounded-full flex items-center gap-2 transition-transform hover:scale-105"
              >
                {t("hero.ctaOrder")} <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/comment-ca-marche")}
                className="bg-transparent border-white/20 text-white hover:bg-white/10 px-8 py-7 text-lg rounded-full"
              >
                {t("hero.ctaLearnMore")}
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0c1221] overflow-hidden bg-gray-600">
                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 text-[#D4A017] fill-[#D4A017]" />
                  ))}
                </div>
                <span className="text-white/60 text-xs mt-1 font-medium">
                  {t("hero.socialProof")}
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative lg:block hidden">
            <div className="relative z-10 w-full max-w-lg mx-auto aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hero_lightbulb.png"
                alt="LumiSense LED Bulb"
                className="w-full h-full object-center object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1221]/40 to-transparent" />
            </div>
            {/* Soft decorative glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D4A017]/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
