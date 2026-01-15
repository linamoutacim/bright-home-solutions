import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Smartphone, Zap, Shield, MousePointer2, Settings, Wifi, Battery, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
    const navigate = useNavigate();
    const [isBulbOn, setIsBulbOn] = useState(true);
    const [brightness, setBrightness] = useState(85);

    const features = [
        {
            icon: Wifi,
            title: "Connexion Instantanée",
            description: "L'ampoule se connecte en Bluetooth ou Wi-Fi à votre smartphone via notre application dédiée en moins de 30 secondes."
        },
        {
            icon: Settings,
            title: "Contrôle Total",
            description: "Allumez ou éteignez vos ampoules et ajustez la luminosité du bout des doigts. Gérez aussi la sensibilité du radar et la durée d'éclairage."
        },
        {
            icon: Zap,
            title: "Automatisation Intelligente",
            description: "Programmez des horaires ou laissez le radar détecter votre présence pour une gestion 100% autonome."
        },
        {
            icon: Shield,
            title: "Sécurité Renforcée",
            description: "Simulez une présence à distance ou recevez des notifications si une activité inhabituelle est détectée."
        }
    ];

    const steps = [
        {
            number: "01",
            title: "Vissez l'ampoule",
            description: "Compatible avec tous les culots E27 standard. Pas besoin d'électricien."
        },
        {
            number: "02",
            title: "Téléchargez l'App",
            description: "Disponible gratuitement sur iOS et Android pour un appairage immédiat."
        },
        {
            number: "03",
            title: "Profitez",
            description: "Votre maison s'illumine toute seule. Vous ne toucherez plus jamais d'interrupteur."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-hero relative overflow-hidden">
                <div className="container relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                        L'Intelligence au Bout des <span className="text-gradient">Doigts</span>
                    </h1>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
                        Découvrez comment Lumini transforme votre maison avec une technologie radar ultra-précise et une connectivité smartphone fluide.
                    </p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 blur-3xl rounded-full translate-x-1/2" />
            </section>

            {/* App Interface Demo */}
            <section className="py-24 container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="bg-accent/20 absolute inset-0 blur-3xl rounded-full" />
                        <div className="relative bg-navy rounded-[3rem] p-4 border-8 border-navy-light shadow-2xl max-w-xs mx-auto">
                            {/* Fake App UI */}
                            <div className={`rounded-[2.5rem] overflow-hidden aspect-[9/19] p-6 text-navy transition-all duration-700 relative ${isBulbOn ? "bg-white shadow-[0_0_50px_rgba(251,191,36,0.2)]" : "bg-slate-200"}`}>
                                {isBulbOn && (
                                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-accent/20 to-transparent pointer-events-none animate-pulse-glow" />
                                )}
                                <div className="flex justify-between items-center mb-8 relative z-10">
                                    <div className="font-bold">Lumini</div>
                                    <Wifi className={`w-5 h-5 transition-colors ${isBulbOn ? "text-accent" : "text-slate-400"}`} />
                                </div>
                                <div className="space-y-6 relative z-10">
                                    <button
                                        onClick={() => setIsBulbOn(!isBulbOn)}
                                        className="w-full flex justify-between items-center bg-secondary/30 p-4 rounded-2xl hover:bg-secondary/50 transition-all active:scale-95"
                                    >
                                        <span className="font-bold text-sm">On / Off</span>
                                        <div className={`w-12 h-6 rounded-full relative shadow-inner transition-colors duration-300 ${isBulbOn ? "bg-accent" : "bg-slate-400"}`}>
                                            <div className={`absolute top-1 bottom-1 w-4 bg-white rounded-full shadow-sm transition-all duration-300 ${isBulbOn ? "right-1" : "left-1"}`} />
                                        </div>
                                    </button>
                                    <div className={`p-4 rounded-2xl transition-colors duration-300 ${isBulbOn ? "bg-secondary" : "bg-slate-300/50"}`}>
                                        <div className="text-xs font-semibold opacity-50 mb-1 uppercase tracking-tighter">État du Radar</div>
                                        <div className={`flex items-center gap-2 font-bold text-sm transition-colors duration-300 ${isBulbOn ? "text-success" : "text-slate-500"}`}>
                                            <div className={`w-2 h-2 rounded-full ${isBulbOn ? "bg-success animate-pulse" : "bg-slate-400"}`} />
                                            {isBulbOn ? "Détection Active" : "Veille"}
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className={`flex justify-between text-xs font-bold uppercase transition-opacity duration-300 ${isBulbOn ? "opacity-50" : "opacity-20"}`}>
                                            <span>Luminosité</span>
                                            <span>{brightness}%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full relative cursor-pointer group" onClick={(e) => {
                                            if (!isBulbOn) return;
                                            const rect = e.currentTarget.getBoundingClientRect();
                                            const x = e.clientX - rect.left;
                                            const newBrightness = Math.round((x / rect.width) * 100);
                                            setBrightness(Math.max(10, Math.min(100, newBrightness)));
                                        }}>
                                            <div
                                                className={`absolute left-0 top-0 bottom-0 rounded-full transition-all duration-300 ${isBulbOn ? "bg-accent shadow-glow" : "bg-slate-400"}`}
                                                style={{ width: `${brightness}%` }}
                                            />
                                            <div
                                                className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 rounded-full shadow-md transition-all duration-300 ${isBulbOn ? "border-accent" : "border-slate-400"}`}
                                                style={{ left: `${brightness}%`, transform: `translate(-50%, -50%)` }}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4 pt-2">
                                        <div className={`flex justify-between items-center p-3 border rounded-xl transition-all duration-300 ${isBulbOn ? "bg-white/50" : "bg-slate-400/20 border-slate-300"}`}>
                                            <span className={`text-sm font-semibold transition-opacity duration-300 ${isBulbOn ? "opacity-100" : "opacity-40"}`}>Mode Nuit</span>
                                            <div className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${isBulbOn ? "bg-accent/30" : "bg-slate-300"}`}>
                                                <div className={`absolute left-1 top-1 bottom-1 w-3 rounded-full transition-colors duration-300 ${isBulbOn ? "bg-accent" : "bg-slate-400"}`} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold">Un contrôle sans précédent</h2>
                        <div className="grid gap-6">
                            {features.map((f, i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                                        <f.icon className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{f.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 bg-secondary/30">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Installation en 3 étapes simples</h2>
                        <p className="text-muted-foreground">Oubliez la complexité technique, nous avons tout rendu intuitif.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((s, i) => (
                            <div key={i} className="relative p-8 rounded-3xl bg-white border border-border shadow-sm text-center card-hover">
                                <div className="text-6xl font-black text-accent/10 absolute -top-4 left-1/2 -translate-x-1/2">
                                    {s.number}
                                </div>
                                <h3 className="text-xl font-bold mb-3 relative z-10">{s.title}</h3>
                                <p className="text-muted-foreground relative z-10">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 container text-center">
                <div className="bg-navy rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent pointer-events-none" />
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Prêt à passer à l'habitat intelligent ?
                        </h2>
                        <p className="text-white/60 text-lg mb-10">
                            Rejoignez plus de 10 000 foyers qui profitent déjà de la magie Lumini.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                onClick={() => navigate("/#offres")}
                                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-7 text-lg rounded-2xl shadow-glow"
                            >
                                Voir les packs
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HowItWorks;
