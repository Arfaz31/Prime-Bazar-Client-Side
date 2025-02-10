import { FeaturedCategories } from "@/components/Home/featured-categories";
import { HeroSection } from "@/components/Home/hero-section";
import { ProductGrid } from "@/components/Home/product-grid";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FeaturedCategories />
        <ProductGrid />
      </div>
    </div>
  );
}
