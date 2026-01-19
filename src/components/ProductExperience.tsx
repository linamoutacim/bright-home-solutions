import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";

const ProductExperience = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Content */}
                    <div className="flex-1 relative">
                        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
                            <img
                                src="/hero-image.png"
                                alt="Contrôle intelligent LumiSense"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#D4A017]/10 rounded-full blur-3xl -z-10" />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0c1221] leading-tight mb-6">
                                Le contrôle total <br />
                                <span className="text-[#D4A017]">au bout des doigts.</span>
                            </h2>
                            <p className="text-gray-500 text-lg font-medium leading-relaxed">
                                Transformez votre smartphone en télécommande universelle. LumiSense n'est pas qu'une ampoule, c'est une extension de votre confort.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Allumage et extinction à distance",
                                "Réglage de l'intensité lumineuse",
                                "Programmation d'horaires personnalisés",
                                "Mode simulation de présence pour la sécurité",
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#00b67a]/10 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-[#00b67a]" />
                                    </div>
                                    <span className="text-[#0c1221] font-bold text-sm tracking-tight">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-4">
                            <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-[#0c1221] text-white">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <div>
                                    <p className="text-xs text-white/50 font-bold uppercase tracking-wider">Application Gratuite</p>
                                    <p className="font-bold">Disponible sur iOS et Android</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductExperience;
