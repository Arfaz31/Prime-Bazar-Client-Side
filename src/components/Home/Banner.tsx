"use client";

import Image from "next/image";
import Container from "../shared/Container";
import { useEffect, useState } from "react";

const promotionBanners = [
  {
    id: 1,
    title: "Seasonal Sale",
    description: "Get up to 50% off on selected items",
    bannerImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    title: "Seasonal Sale 2",
    description: "Get up to 50% off on selected items",
    bannerImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    buttonText: "View Deals",
  },
  {
    id: 3,
    title: "Seasonal Sale 3",
    description: "Get up to 50% off on selected items",
    bannerImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    buttonText: "Learn More",
  },
];

const secondLayoutData = {
  topBanner: {
    image:
      "https://images.unsplash.com/photo-1618677366787-9727aacca7ea?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Summer Collection",
    buttonText: "Shop Collection",
  },
  bottomBanners: [
    {
      image:
        "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "New Arrivals",
      buttonText: "Shop Now",
    },
    {
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Best Sellers",
      buttonText: "View All",
    },
  ],
};

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === promotionBanners.length - 1 ? 0 : prev + 1
      );
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === promotionBanners.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? promotionBanners.length - 1 : prev - 1
    );
  };

  return (
    <section className="mb-12 mt-5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full h-[500px] relative group">
            <div className="w-full h-full relative rounded-lg overflow-hidden">
              {promotionBanners.map((banner, index) => (
                <div
                  key={banner.id}
                  className={`absolute w-full h-full transition-transform duration-500 ease-in-out  ${
                    index === currentSlide
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                  style={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                  }}
                >
                  <Image
                    src={banner.bannerImage}
                    alt={banner.title}
                    width={800}
                    height={800}
                    className="object-cover w-full h-full rounded-lg"
                  />
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-start p-8 rounded-lg">
                    <h2 className="text-white text-4xl font-bold mb-4 transform translate-y-0 opacity-100 transition-all duration-500">
                      {banner.title}
                    </h2>
                    <p className="text-white/90 text-lg mb-6 max-w-md transform translate-y-0 opacity-100 transition-all duration-500 delay-100">
                      {banner.description}
                    </p>
                    <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-white/90 transition-all duration-300 transform translate-y-0 opacity-100 delay-200">
                      {banner.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={prevSlide}
            >
              ←
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={nextSlide}
            >
              →
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {promotionBanners.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>

          <div className="w-full h-[500px] flex flex-col gap-4">
            {/* Top Banner */}
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <Image
                src={secondLayoutData.topBanner.image}
                alt={secondLayoutData.topBanner.title}
                width={800}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
                <h3 className="text-white text-3xl font-bold mb-4">
                  {secondLayoutData.topBanner.title}
                </h3>
                <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-white/90 transition-all duration-300">
                  {secondLayoutData.topBanner.buttonText}
                </button>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="w-full h-full grid grid-cols-2 gap-4 ">
              {secondLayoutData.bottomBanners.map((banner, index) => (
                <div
                  key={index}
                  className="relative w-full h-full rounded-lg overflow-hidden"
                >
                  <Image
                    src={banner.image}
                    alt={banner.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center">
                    <h3 className="text-white text-2xl font-bold mb-4">
                      {banner.title}
                    </h3>
                    <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-white/90 transition-all duration-300">
                      {banner.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
