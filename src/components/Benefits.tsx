import { Radar, BatteryCharging, Wrench, Moon, Users, ThermometerSun } from "lucide-react";
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
      icon: BatteryCharging,
      title: t("benefits.items.energy.title"),
      description: t("benefits.items.energy.desc"),
    },
    {
      icon: Wrench,
      title: t("benefits.items.easy.title"),
      description: t("benefits.items.easy.desc"),
    },
    {
      icon: Moon,
      title: t("benefits.items.night.title"),
      description: t("benefits.items.night.desc"),
    },
    {
      icon: Users,
      title: t("benefits.items.seniors.title"),
      description: t("benefits.items.seniors.desc"),
    },
    {
      icon: ThermometerSun,
      title: t("benefits.items.temps.title"),
      description: t("benefits.items.temps.desc"),
    },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">{t("benefits.badge")}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("benefits.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("benefits.subtitle")}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
