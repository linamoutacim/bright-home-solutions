import { Check, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const ComparisonTable = () => {
    const { t } = useTranslation();

    const features = [
        { key: "radar", lumini: true, infrared: false, regular: false },
        { key: "obstacles", lumini: true, infrared: false, regular: false },
        { key: "smartphone", lumini: true, infrared: "sometimes", regular: false },
        { key: "installation", lumini: true, infrared: true, regular: true },
        { key: "savings", lumini: true, infrared: true, regular: false },
        { key: "lifespan", lumini: true, infrared: false, regular: false },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container px-4">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">{t("comparison.badge")}</span>
                    <h2 className="text-3xl md:text-5xl font-black text-foreground mt-3 mb-6 leading-tight">
                        {t("comparison.title")} <span className="text-accent">Lumini</span> ?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        {t("comparison.subtitle")}
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="overflow-x-auto rounded-[2rem] border shadow-2xl bg-card/50 backdrop-blur-sm animate-slide-up">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-secondary/50">
                                    <th className="p-6 text-sm md:text-lg font-bold text-foreground/80">{t("comparison.columns.features")}</th>
                                    <th className="p-6 text-center text-accent text-lg md:text-xl font-black uppercase tracking-tighter bg-accent/5">
                                        {t("comparison.columns.lumini")}
                                    </th>
                                    <th className="p-6 text-center text-muted-foreground/60 font-semibold italic text-sm md:text-base">
                                        {t("comparison.columns.infrared")}
                                    </th>
                                    <th className="p-6 text-center text-muted-foreground/60 font-semibold italic text-sm md:text-base">
                                        {t("comparison.columns.classic")}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, index) => (
                                    <tr key={index} className="border-t border-border/50 hover:bg-secondary/30 transition-colors">
                                        <td className="p-6 font-medium text-foreground text-sm md:text-base">{t(`comparison.features.${feature.key}`)}</td>
                                        <td className="p-6 text-center bg-accent/[0.02]">
                                            <div className="flex justify-center">
                                                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent animate-pulse-glow">
                                                    <Check className="w-5 h-5 font-bold" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-6 text-center">
                                            <div className="flex justify-center">
                                                {feature.infrared === true ? (
                                                    <Check className="w-5 h-5 text-muted-foreground/50" />
                                                ) : feature.infrared === "sometimes" ? (
                                                    <div className="flex flex-col items-center">
                                                        <Check className="w-4 h-4 text-muted-foreground/30" />
                                                        <span className="text-[10px] text-muted-foreground font-medium opacity-50 italic uppercase mt-1">
                                                            {t("comparison.labels.rarely")}
                                                        </span>
                                                    </div>
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
                    <div className="mt-10 text-center p-8 rounded-[2rem] bg-navy text-white shadow-glow border border-white/10 relative overflow-hidden group animate-slide-up" style={{ animationDelay: "0.2s" }}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl -mr-16 -mt-16 group-hover:bg-accent/20 transition-colors duration-700" />
                        <p className="relative z-10 text-lg opacity-90 italic">
                            {t("comparison.footer")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;
