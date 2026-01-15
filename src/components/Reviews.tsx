import { Star, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t } = useTranslation();
  const reviews = t("reviews.items", { returnObjects: true }) as any[];

  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center">
          <div className="flex gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0c1221]">
            {t("reviews.title")}
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#f9fafb] rounded-2xl p-8 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img src={`https://i.pravatar.cc/150?u=${index + 50}`} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-[#0c1221] text-sm">{review.name}</p>
                  <div className="flex items-center gap-1 text-[#00b67a] text-[10px] font-bold">
                    <CheckCircle2 className="w-3 h-3" />
                    {review.status}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
