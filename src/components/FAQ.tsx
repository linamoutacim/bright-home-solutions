import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quelle est la différence entre le capteur Radar et Infrarouge ?",
    answer: "Le capteur Radar utilise des micro-ondes pour détecter les mouvements. Il est plus précis, fonctionne même à travers des obstacles légers (comme un rideau), et détecte les mouvements subtils. L'infrarouge classique nécessite une ligne de vue directe et peut rater certains mouvements.",
  },
  {
    question: "L'ampoule fonctionne-t-elle sur n'importe quelle douille ?",
    answer: "Nos ampoules sont en culot E27, le standard le plus répandu en France. Si vous avez des douilles E14 (petites), nous proposons des adaptateurs E27 vers E14 en option.",
  },
  {
    question: "Combien de temps reste-t-elle allumée après détection ?",
    answer: "L'ampoule s'éteint automatiquement après environ 30 secondes sans mouvement détecté. Si vous bougez, le minuteur se réinitialise.",
  },
  {
    question: "Quelle est la portée de détection ?",
    answer: "Le capteur radar détecte les mouvements jusqu'à 5-7 mètres avec un angle de 120°. Parfait pour un couloir, un escalier ou un garage.",
  },
  {
    question: "Blanc chaud ou blanc froid, lequel choisir ?",
    answer: "Blanc chaud (3000K) : Idéal pour l'intérieur, couloirs, chambres. Lumière douce et apaisante. Blanc froid (6500K) : Idéal pour garage, cave, atelier. Lumière vive et énergisante.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Expédition sous 24-48h. Livraison suivie en 7 à 12 jours ouvrés. Vous recevrez un numéro de suivi par email dès l'expédition.",
  },
  {
    question: "Quelle est la durée de vie de l'ampoule ?",
    answer: "Nos ampoules LED ont une durée de vie estimée de 25 000 heures. Avec une utilisation moyenne, cela représente plus de 10 ans !",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tout ce que vous devez savoir sur nos ampoules LED à détection
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-card border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
