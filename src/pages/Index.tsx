import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import { CheckCircle2, Zap, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />

      {/* Trustpilot-style social proof banner */}
      <section className="bg-white border-y py-4 overflow-hidden">
        <div className="container flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />)}
            </div>
            <span className="text-sm font-bold text-foreground">{t("common.excellent")}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold">{t("common.satisfiedClients")}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center">
              <Zap className="w-4 h-4 text-accent" />
            </div>
            <span className="text-sm font-semibold">{t("common.radarTech")}</span>
          </div>
        </div>
      </section>

      {/* Full-width Cinematic Image */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src="/full-width-lifestyle.png"
          alt="Lumini Modern Living"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/10" />
        <div className="absolute inset-0 flex items-center justify-center text-center p-4">
          <div className="max-w-4xl space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-2xl">
              L'Élégance de l'Intelligence
            </h2>
            <p className="text-xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-lg">
              Une immersion totale dans le confort moderne, où chaque détail est pensé pour votre bien-être.
            </p>
          </div>
        </div>
      </section>



      {/* Realistic Presentation Section 2: App Control */}
      <section className="py-24 bg-primary/5 overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
            <div className="flex-1 space-y-8 animate-slide-up">
              <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-black tracking-wider uppercase">
                Un contrôle total
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
                La puissance au <br />
                <span className="text-accent underline decoration-accent/30 underline-offset-8">bout des doigts.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ajustez la sensibilité, programmez des horaires ou changez la température de couleur directement depuis votre smartphone. Une interface intuitive conçue pour simplifier votre quotidien.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "Contrôle à distance Illimité",
                  "Programmation Intelligente",
                  "Économie d'Énergie Visible",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-accent/20 text-accent rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-bold opacity-80">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative group animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/app-control.png"
                  alt="Lumini App Control"
                  className="w-full object-cover aspect-[4/5] hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute top-8 right-8">
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-black uppercase shadow-glow animate-pulse">
                    Nouveau : App V2.0
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Benefits />

      <ComparisonTable />

      {/* Final Persuasive Push */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
        <div className="container relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              Ne laissez plus jamais votre maison <br />
              <span className="text-accent underline decoration-accent/30 underline-offset-4">décider de votre facture.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-accent mb-2">30s</div>
                <p className="text-sm opacity-70 italic">Installation chrono</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-accent mb-2">-80%</div>
                <p className="text-sm opacity-70 italic">Sur vos factures</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl font-bold text-accent mb-2">10k+</div>
                <p className="text-sm opacity-70 italic">Utilisateurs conquis</p>
              </div>
            </div>
            <p className="text-xl opacity-80 mb-10 leading-relaxed font-medium">
              "J'avais peur que ce soit compliqué, mais c'est littéralement magique. On rentre, ça s'allume, on sort, ça s'éteint. Et ma facture a fondu." <br />
              <span className="text-sm font-bold text-accent">— Thomas, client Lumini vérifié</span>
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 border border-accent/30 rounded-full text-accent font-bold animate-pulse">
              🔥 Offre de lancement : -40% disponibles aujourd'hui
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
