/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { setProducts } from "@/redux/store/features/productSlice";
import { addItem } from "@/redux/store/features/cartSlice";
import { Card, CardContent, CardFooter } from "../ui/card";

// Mock data - replace with API call
const mockProducts = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    rating: 4.5,
    stock: 10,
    vendor: "Tech Corp",
  },
  {
    id: "2",
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health tracking",
    price: 299.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    rating: 4.2,
    stock: 15,
    vendor: "Tech Corp",
  },
  {
    id: "3",
    name: "Running Shoes",
    description: "Comfortable running shoes for professional athletes",
    price: 129.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    rating: 4.7,
    stock: 20,
    vendor: "Sports Co",
  },
  {
    id: "4",
    name: "Laptop Backpack",
    description: "Durable laptop backpack with multiple compartments",
    price: 79.99,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    rating: 4.4,
    stock: 25,
    vendor: "Fashion Inc",
  },
];

export function ProductGrid() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state: any) => state.product
  );

  useEffect(() => {
    dispatch(setProducts(mockProducts));
  }, [dispatch]);

  const handleAddToCart = (product: any) => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
      })
    );
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <Card key={product.id} className="group">
            <CardContent className="p-0">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400  fill"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating}
                  </span>
                </div>
                <p className="text-xl font-bold">${product.price}</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                className="w-full"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
