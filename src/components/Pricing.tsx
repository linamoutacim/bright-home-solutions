import { Check, Truck, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const offers = [
    {
      id: 1,
      name: t("pricing.offers.pack1.name"),
      quantity: 1,
      price: 14.90,
      originalPrice: 19.90,
      pricePerUnit: 14.90,
      shipping: 4.90,
      popular: false,
      features: t("pricing.offers.pack1.features", { returnObjects: true }) as string[],
    },
    {
      id: 2,
      name: t("pricing.offers.pack3.name"),
      quantity: 3,
      price: 29.90,
      originalPrice: 44.70,
      pricePerUnit: 9.97,
      shipping: 0,
      popular: true,
      features: t("pricing.offers.pack3.features", { returnObjects: true }) as string[],
    },
    {
      id: 3,
      name: t("pricing.offers.pack6.name"),
      quantity: 6,
      price: 49.90,
      originalPrice: 89.40,
      pricePerUnit: 8.32,
      shipping: 0,
      popular: false,
      features: t("pricing.offers.pack6.features", { returnObjects: true }) as string[],
    },
  ];

  const handleAddToCart = (offer: any, redirect: boolean = false) => {
    addToCart({
      id: offer.id,
      name: offer.name,
      price: offer.price,
      quantity: 1,
      itemQuantity: offer.quantity,
    });

    if (redirect) {
      navigate("/checkout");
    }
  };

  return (
    <section id="offres" className="py-24 bg-background">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">{t("pricing.badge")}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col border ${offer.popular
                ? "bg-primary text-primary-foreground shadow-glow scale-105 border-primary z-10"
                : "bg-card shadow-card hover:shadow-card-hover border-border/50"
                } animate-slide-up`}
            >
              {/* Popular badge - MODIFIED: removed animate-pulse and kept bg-accent */}
              {offer.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-black px-6 py-2 rounded-full shadow-lg border-none">
                  <Star className="w-3.5 h-3.5 mr-2 fill-current" />
                  {t("pricing.popular")}
                </Badge>
              )}

              {/* Offer name */}
              <div className="mb-6 text-center">
                <div className="mb-4 relative h-24 flex items-center justify-center">
                  <img src="/lumini-bulb.png" alt="Lumini Bulb" className="h-full object-contain" />
                  {offer.quantity > 1 && (
                    <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-black border-2 border-white shadow-lg">
                      x{offer.quantity}
                    </div>
                  )}
                </div>
                <h3 className={`text-2xl font-black mb-2 ${offer.popular ? "text-primary-foreground" : "text-foreground"}`}>
                  {offer.name}
                </h3>
                <div className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${offer.popular ? "bg-white/10 text-primary-foreground/90" : "bg-muted text-muted-foreground"}`}>
                  {offer.quantity} {offer.quantity > 1 ? t("pricing.quantity_plural") : t("pricing.quantity")}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className={`text-lg line-through opacity-50 ${offer.popular ? "text-primary-foreground" : "text-muted-foreground"}`}>
                    {offer.originalPrice.toFixed(2)}€
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground font-black rounded-lg border-none px-2">
                    -{Math.round((1 - offer.price / offer.originalPrice) * 100)}%
                  </Badge>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-5xl font-black tracking-tight ${offer.popular ? "text-primary-foreground" : "text-foreground"}`}>
                    {offer.price.toFixed(2)}
                  </span>
                  <span className={`text-xl font-bold ${offer.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>€</span>
                </div>
                <p className={`text-sm mt-2 font-medium ${offer.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {t("pricing.unitPrice", { price: offer.pricePerUnit.toFixed(2) })}
                </p>
              </div>

              {/* Shipping */}
              <div className={`flex items-center justify-center gap-2 mb-8 text-sm font-bold ${offer.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                <Truck className={`w-5 h-5 ${offer.popular ? "text-accent" : "text-primary"}`} />
                {offer.shipping > 0 ? (
                  <span>{t("pricing.shipping", { price: offer.shipping.toFixed(2) })}</span>
                ) : (
                  <span className="text-success uppercase tracking-wider glow-success">{t("pricing.freeShipping")}</span>
                )}
              </div>

              {/* Features */}
              <div className={`w-full h-px mb-8 ${offer.popular ? "bg-white/10" : "bg-border/50"}`} />
              <ul className="space-y-4 mb-10 flex-grow text-left">
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`rounded-full p-1 flex-shrink-0 mt-0.5 ${offer.popular ? "bg-accent/20 text-accent" : "bg-success/20 text-success"}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className={`text-sm font-medium ${offer.popular ? "text-primary-foreground/90" : "text-foreground/90"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="space-y-3 mt-auto">
                <Button
                  onClick={() => handleAddToCart(offer, true)}
                  className={`w-full py-7 text-lg font-black rounded-2xl transition-all duration-300 shadow-lg ${offer.popular
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover:scale-[1.03]"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-xl hover:scale-[1.02]"
                    }`}
                >
                  {t("pricing.ctaBuy")}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleAddToCart(offer, false)}
                  className={`w-full py-6 text-base font-bold rounded-2xl transition-all duration-300 border-2 ${offer.popular
                    ? "border-white/20 text-white bg-transparent hover:bg-white/10"
                    : "border-primary/10 text-primary bg-secondary/30 hover:bg-secondary/50"
                    }`}
                >
                  <ShoppingCart className="w-5 h-5 mr-3" />
                  {t("pricing.ctaAdd")}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-20 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2.5 bg-secondary/30 px-4 py-2 rounded-full">
            <Check className="w-4 h-4 text-success" />
            <span className="text-xs font-bold uppercase tracking-wider">{t("pricing.trust.payment")}</span>
          </div>
          <div className="flex items-center gap-2.5 bg-secondary/30 px-4 py-2 rounded-full">
            <Check className="w-4 h-4 text-success" />
            <span className="text-xs font-bold uppercase tracking-wider">{t("pricing.trust.shipping")}</span>
          </div>
          <div className="flex items-center gap-2.5 bg-secondary/30 px-4 py-2 rounded-full">
            <Check className="w-4 h-4 text-success" />
            <span className="text-xs font-bold uppercase tracking-wider">{t("pricing.trust.guarantee")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
