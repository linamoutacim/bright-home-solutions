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

      {/* Persuasive Point / Why Us */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-bold tracking-wider uppercase">
                Bienvenue dans le Futur
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-foreground leading-tight">
                Une technologie qui ne se contente pas d'éclairer. <br />
                <span className="text-accent underline decoration-accent/30 underline-offset-8 transition-all hover:decoration-accent">Elle veille sur vous.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pourquoi continuer à tâtonner dans le noir ou à gaspiller de l'énergie ? <br />
                <strong>Lumini</strong> n'est pas une simple ampoule. C'est un concierge invisible qui réduit vos factures de 80% tout en sécurisant vos proches grâce à sa détection radar millimétrée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-success/20 text-success rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold opacity-80">Économies Immédiates</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-success/20 text-success rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold opacity-80">Sécurité 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-success/20 text-success rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold opacity-80">Contrôle Smartphone (On/Off, Intensité)</span>
                </div>
              </div>
            </div>
            <div className="relative group animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700" />
              <div className="relative border-8 border-white rounded-[2rem] shadow-2xl overflow-hidden aspect-video bg-navy flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2 italic">"Le dernier interrupteur que vous aurez jamais touché."</h3>
                  <div className="flex justify-center gap-1">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 text-accent fill-accent" />)}
                  </div>
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
