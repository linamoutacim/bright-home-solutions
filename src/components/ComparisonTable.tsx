import { Check, X } from "lucide-react";

const ComparisonTable = () => {
    const features = [
        { name: "Détection Radar (360°)", lumini: true, infrared: false, regular: false },
        { name: "Détection à travers les obstacles", lumini: true, infrared: false, regular: false },
        { name: "Contrôle via Smartphone", lumini: true, infrared: "Parfois", regular: false },
        { name: "Installation sans travaux", lumini: true, infrared: true, regular: true },
        { name: "Économie d'énergie (>80%)", lumini: true, infrared: true, regular: false },
        { name: "Durée de vie 10 ans +", lumini: true, infrared: false, regular: false },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">Le Match</span>
                    <h2 className="text-3xl md:text-5xl font-black text-foreground mt-3 mb-6 leading-tight">
                        Pourquoi choisir <span className="text-accent">Lumini</span> ?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Comparez et voyez la différence par vous-même. Lumini redéfinit l'éclairage domestique.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="overflow-x-auto rounded-3xl border shadow-xl bg-card">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-secondary/50">
                                    <th className="p-6 text-lg font-bold">Fonctionnalités</th>
                                    <th className="p-6 text-center text-accent text-xl font-black uppercase tracking-tighter">Lumini</th>
                                    <th className="p-6 text-center text-muted-foreground/60 font-semibold italic">Infrarouge</th>
                                    <th className="p-6 text-center text-muted-foreground/60 font-semibold italic">Classique</th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, index) => (
                                    <tr key={index} className="border-t border-border/50 hover:bg-secondary/30 transition-colors">
                                        <td className="p-6 font-medium text-foreground">{feature.name}</td>
                                        <td className="p-6 text-center">
                                            <div className="flex justify-center">
                                                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                                    <Check className="w-5 h-5 font-bold" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6 text-center">
                                            <div className="flex justify-center">
                                                {feature.infrared === true ? (
                                                    <Check className="w-5 h-5 text-muted-foreground/50" />
                                                ) : feature.infrared === "Parfois" ? (
                                                    <span className="text-xs text-muted-foreground font-medium opacity-50 italic">Rarement</span>
                                                ) : (
                                                    <X className="w-5 h-5 text-destructive/30" />
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-6 text-center">
                                            <div className="flex justify-center">
                                                {feature.regular === true ? (
                                                    <Check className="w-5 h-5 text-muted-foreground/50" />
                                                ) : (
                                                    <X className="w-5 h-5 text-destructive/30" />
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8 text-center p-6 rounded-2xl bg-accent/5 border border-accent/10 italic text-muted-foreground">
                        "Le radar Lumini détecte les mouvements à 360° même à travers des rideaux, là où l'infrarouge échoue systématiquement."
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
