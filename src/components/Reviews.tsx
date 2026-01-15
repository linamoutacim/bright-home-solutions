import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Marie L.",
    location: "Lyon",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Parfait pour l'escalier de la cave ! Plus besoin de chercher l'interrupteur les bras chargés de courses. Mes parents de 75 ans adorent aussi.",
    product: "Pack 3 Ampoules",
    verified: true,
  },
  {
    id: 2,
    name: "Jean-Pierre D.",
    location: "Bordeaux",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Installation ultra simple, je l'ai mise dans mon garage. La détection radar est vraiment plus réactive que les capteurs infrarouges classiques.",
    product: "Pack 6 Ampoules",
    verified: true,
  },
  {
    id: 3,
    name: "Sophie M.",
    location: "Nantes",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Commandé pour les toilettes des enfants. Plus de lumière allumée toute la nuit ! Économies garanties et les enfants adorent l'effet 'magique'.",
    product: "Pack 3 Ampoules",
    verified: true,
  },
  {
    id: 4,
    name: "François R.",
    location: "Toulouse",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
    text: "Très bon produit, la lumière blanc chaud est agréable. Seul petit bémol : j'aurais aimé pouvoir régler le temps avant extinction.",
    product: "Pack 3 Ampoules",
    verified: true,
  },
];

const Reviews = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Témoignages</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Ce qu'en pensent nos clients
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-accent" />
              ))}
            </div>
            <span className="text-muted-foreground">4.8/5 sur +2000 avis</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-accent/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "text-accent fill-accent" : "text-muted"
                      }`}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Reviewer info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-accent/20"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">{review.product}</p>
                  {review.verified && (
                    <p className="text-xs text-success font-medium">✓ Achat vérifié</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
