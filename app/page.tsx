import { HoodieCard } from "@/components/hoodie-card";
import { AutoSliderBanner } from "@/components/auto-slider-banner";

export default function Home() {
  const hoodies = [
    {
      id: 1,
      name: "LV Premium Tshirt",
      price: 149.99,
      image1: "/assets/1.jpg",
      image2: "/assets/1.jpg",
    },
    {
      id: 2,
      name: "LV Gömlen-Şort",
      price: 154.99,
      image1: "/assets/2.jpg",
      image2: "/assets/2.jpg",
    },
    {
      id: 3,
      name: "LV Kot Gömlek",
      price: 159.99,
      image1: "/assets/3.jpg",
      image2: "/assets/3.jpg",
    },
    {
      id: 4,
      name: "LV Limited Edition",
      price: 199.99,
      image1: "/assets/4.jpg",
      image2: "/assets/4.jpg",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Full-screen Auto-sliding Banner */}
      <AutoSliderBanner />

      {/* Product Section */}
      <section
        id="product-section"
        className="w-full py-12 md:py-24 bg-dark-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">
            Sezon Koleksiyon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hoodies.map((hoodie) => (
              <HoodieCard key={hoodie.id} {...hoodie} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
