import { Check, Truck, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

const offers = [
  {
    id: 1,
    name: "Découverte",
    quantity: 1,
    price: 14.90,
    originalPrice: 19.90,
    pricePerUnit: 14.90,
    shipping: 4.90,
    popular: false,
    features: [
      "1 Ampoule LED Radar",
      "Garantie 2 ans",
      "Guide d'installation",
    ],
  },
  {
    id: 2,
    name: "Lieux de Passage",
    quantity: 3,
    price: 29.90,
    originalPrice: 44.70,
    pricePerUnit: 9.97,
    shipping: 0,
    popular: true,
    features: [
      "3 Ampoules LED Radar",
      "Livraison GRATUITE",
      "Garantie 2 ans",
      "Guide d'installation",
      "Support prioritaire",
    ],
  },
  {
    id: 3,
    name: "Maison Complète",
    quantity: 6,
    price: 49.90,
    originalPrice: 89.40,
    pricePerUnit: 8.32,
    shipping: 0,
    popular: false,
    features: [
      "6 Ampoules LED Radar",
      "Livraison GRATUITE",
      "Garantie 2 ans",
      "Guide d'installation",
      "Support prioritaire",
      "Douille adaptatrice offerte",
    ],
  },
];

import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (offer: typeof offers[0], redirect: boolean = false) => {
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
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Offres</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Choisissez votre pack
          </h2>
          <p className="text-muted-foreground text-lg">
            Plus vous commandez, plus vous économisez. Livraison offerte dès 3 ampoules.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center md:text-left">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col border ${offer.popular
                ? "bg-primary text-primary-foreground shadow-glow scale-105 border-primary z-10"
                : "bg-card shadow-card hover:shadow-card-hover border-border/50"
                }`}
            >
              {/* Popular badge */}
              {offer.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-bold px-6 py-1.5 rounded-full shadow-lg border-none animate-pulse">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  LE PLUS POPULAIRE
                </Badge>
              )}

              {/* Offer name */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${offer.popular ? "text-primary-foreground" : "text-foreground"}`}>
                  {offer.name}
                </h3>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${offer.popular ? "bg-white/10 text-primary-foreground/90" : "bg-muted text-muted-foreground"}`}>
                  {offer.quantity} ampoule{offer.quantity > 1 ? "s" : ""}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-lg line-through opacity-50 ${offer.popular ? "text-primary-foreground" : "text-muted-foreground"}`}>
                    {offer.originalPrice.toFixed(2)}€
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground font-bold rounded-lg border-none">
                    -{Math.round((1 - offer.price / offer.originalPrice) * 100)}%
                  </Badge>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-black tracking-tight ${offer.popular ? "text-primary-foreground" : "text-foreground"}`}>
                    {offer.price.toFixed(2)}
                  </span>
                  <span className={`text-xl font-bold ${offer.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>€</span>
                </div>
                <p className={`text-sm mt-2 font-medium ${offer.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  soit <span className={offer.popular ? "text-accent" : "text-primary"}>{offer.pricePerUnit.toFixed(2)}€</span> l'unité
                </p>
              </div>

              {/* Shipping */}
              <div className={`flex items-center gap-2 mb-8 text-sm font-semibold ${offer.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                <Truck className={`w-5 h-5 ${offer.popular ? "text-accent" : "text-primary"}`} />
                {offer.shipping > 0 ? (
                  <span>Livraison {offer.shipping.toFixed(2)}€</span>
                ) : (
                  <span className="text-success uppercase tracking-wider">Livraison OFFERTE</span>
                )}
              </div>

              {/* Features */}
              <div className={`w-full h-px mb-8 ${offer.popular ? "bg-white/10" : "bg-border"}`} />
              <ul className="space-y-4 mb-10 flex-grow text-left">
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className={`rounded-full p-1 flex-shrink-0 ${offer.popular ? "bg-accent/20 text-accent" : "bg-success/20 text-success"}`}>
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className={`text-sm font-medium ${offer.popular ? "text-primary-foreground/90" : "text-foreground/90"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={() => handleAddToCart(offer, true)}
                  className={`w-full py-7 text-lg font-bold rounded-2xl transition-all duration-300 shadow-lg ${offer.popular
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover:scale-105"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-xl"
                    }`}
                >
                  Acheter maintenant
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleAddToCart(offer, false)}
                  className={`w-full py-6 text-base font-semibold rounded-2xl transition-all duration-300 border-2 ${offer.popular
                    ? "border-white/20 text-white bg-transparent hover:bg-white/10"
                    : "border-primary/10 text-primary bg-secondary/30 hover:bg-secondary/50"
                    }`}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Ajouter au panier
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-success" />
            <span className="text-sm">Paiement sécurisé</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-success" />
            <span className="text-sm">Livraison suivie</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-success" />
            <span className="text-sm">Satisfait ou remboursé</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
