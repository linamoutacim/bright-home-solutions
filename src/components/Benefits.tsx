import { Radar, PiggyBank, Wrench, Zap, ShieldAlert, Clock3 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Radar,
      title: t("benefits.items.radar.title"),
      description: t("benefits.items.radar.desc"),
    },
    {
      icon: PiggyBank,
      title: t("benefits.items.energy.title"),
      description: t("benefits.items.energy.desc"),
    },
    {
      icon: Wrench,
      title: t("benefits.items.easy.title"),
      description: t("benefits.items.easy.desc"),
    },
    {
      icon: Zap,
      title: t("benefits.items.instant.title"),
      description: t("benefits.items.instant.desc"),
    },
    {
      icon: ShieldAlert,
      title: t("benefits.items.security.title"),
      description: t("benefits.items.security.desc"),
    },
    {
      icon: Clock3,
      title: t("benefits.items.longlife.title"),
      description: t("benefits.items.longlife.desc"),
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0c1221] mb-6">
            {t("benefits.title")}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            {t("benefits.subtitle")}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-10 rounded-3xl bg-transparent border-none transition-all duration-300 hover:bg-black/5"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#D4A017]/10 flex items-center justify-center mb-8">
                <benefit.icon className="w-8 h-8 text-[#D4A017]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0c1221] mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-base font-medium">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
