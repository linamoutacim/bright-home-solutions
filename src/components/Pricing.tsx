import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (offer: any) => {
    addToCart({
      id: offer.id,
      name: offer.name,
      price: offer.price,
      quantity: 1,
      itemQuantity: offer.quantity,
    });
    navigate("/checkout");
  };

  const offers = [
    {
      id: 1,
      name: t("pricing.offers.discovery.name"),
      subtitle: t("pricing.offers.discovery.subtitle"),
      price: 14.90,
      quantity: 1,
      features: t("pricing.offers.discovery.features", { returnObjects: true }) as string[],
      popular: false,
      cta: t("pricing.ctaSelect"),
    },
    {
      id: 2,
      name: t("pricing.offers.comfort.name"),
      subtitle: t("pricing.offers.comfort.subtitle"),
      price: 29.90,
      quantity: 3,
      features: t("pricing.offers.comfort.features", { returnObjects: true }) as string[],
      popular: true,
      savings: t("pricing.offers.comfort.savings"),
      cta: t("pricing.ctaOrder"),
    },
    {
      id: 3,
      name: t("pricing.offers.home.name"),
      subtitle: t("pricing.offers.home.subtitle"),
      price: 49.90,
      quantity: 6,
      features: t("pricing.offers.home.features", { returnObjects: true }) as string[],
      popular: false,
      savings: t("pricing.offers.home.savings"),
      cta: t("pricing.ctaSelect"),
    },
  ];

  return (
    <section id="offres" className="py-24 bg-[#f9fafb]">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0c1221] mb-6">
            {t("pricing.title")}
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`relative rounded-3xl p-10 flex flex-col transition-all duration-300 ${offer.popular
                  ? "bg-white border-2 border-[#D4A017] shadow-xl scale-105 z-10"
                  : "bg-white border border-[#f1f1f1] hover:shadow-lg"
                }`}
            >
              {offer.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4A017] text-[#0c1221] text-[10px] font-bold px-4 py-1.5 rounded-md uppercase tracking-wider">
                  {t("pricing.popular")}
                </div>
              )}

              <div className="mb-8 text-center flex flex-col">
                <h3 className="text-2xl font-bold text-[#0c1221] mb-1">
                  {offer.name}
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  {offer.subtitle}
                </p>
              </div>

              <div className="mb-8 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-black text-[#0c1221]">
                    {offer.price.toFixed(2)}
                  </span>
                  <span className="text-2xl font-black text-[#0c1221]">€</span>
                </div>
                {offer.savings && (
                  <p className="text-[#00b67a] text-sm font-bold mt-2">
                    {offer.savings}
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-10 flex-grow text-left">
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#D4A017]" />
                    <span className="text-gray-600 font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleAddToCart(offer)}
                className={`w-full py-7 text-lg font-bold rounded-full transition-all duration-300 ${offer.popular
                    ? "bg-[#D4A017] hover:bg-[#B8860B] text-[#0c1221]"
                    : "bg-white hover:bg-gray-50 text-[#0c1221] border border-gray-200"
                  }`}
              >
                {offer.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
