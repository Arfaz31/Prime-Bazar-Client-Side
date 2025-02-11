/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  ShoppingCart,
  Heart,
  Search,
  ChevronDown,
  User,
} from "lucide-react";
import Link from "next/link";
import Container from "../shared/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    "Furniture",
    "Lighting",
    "Home Decor",
    "Kitchen",
    "Bedroom",
    "Office",
    "Outdoor",
    "Sale Items",
  ];

  return (
    <div
      className={` w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      {/* Top Bar */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-100">
        <Container>
          <div>
            <div className="flex justify-between items-center h-10 text-sm">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  Welcome to prime bazaar Online Store
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <select className="bg-transparent text-gray-600 text-sm focus:outline-none cursor-pointer">
                  <option>English</option>
                  <option>Español</option>
                  <option>Français</option>
                </select>
                <span className="text-gray-300">|</span>
                <select className="bg-transparent text-gray-600 text-sm focus:outline-none cursor-pointer">
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div>
          <Container>
            <div className="flex justify-between items-center h-16 md:h-[68px]">
              {/* Logo and Mobile Menu */}
              <div className="flex items-center">
                <button
                  className="md:hidden p-2 hover:bg-gray-100 rounded-lg mr-2 transition-colors"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
                <Link
                  href="/"
                  className="text-2xl font-bold text-blue-600 tracking-tight"
                >
                  Prime Bazaar<span className="text-blue-600">.</span>
                </Link>
              </div>

              {/* Search Bar */}
              <div className="hidden md:flex flex-1 max-w-xl mx-6">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search
                    className="absolute left-3 top-2.5 text-gray-400"
                    size={20}
                  />
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <div className="relative group">
                  <button
                    className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  >
                    <User size={20} />
                    <span>Account</span>
                    <ChevronDown size={16} />
                  </button>
                  <div
                    className={`absolute right-0 w-48 mt-2 bg-white border border-gray-100 rounded-lg shadow-lg transition-all ${
                      isCategoryOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <div className="py-2">
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Sign In
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Register
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        My Orders
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Heart size={20} className="text-gray-600" />
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      0
                    </span>
                  </button>
                  <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ShoppingCart size={20} className="text-gray-600" />
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      0
                    </span>
                  </button>
                  <div className="text-sm font-medium">$0.00</div>
                </div>
              </div>
            </div>
          </Container>

          {/* Category Navigation */}
          <div className="hidden md:block bg-blue-50 h-[68px] pt-2">
            <Container className="md:flex items-center space-x-8 gap-10 h-12 text-sm">
              <div className="relative group">
                <button className="flex items-center space-x-1 font-medium hover:text-blue-600 transition-colors bg-white px-3 py-2 rounded-full shadow-sm">
                  <span className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
                    {" "}
                    <Menu size={24} />
                  </span>
                  <span>All Categories</span>
                </button>
                <div className="absolute left-0 w-56 mt-2 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="py-2">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                New Arrivals
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Special Offers
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                Contact Us
              </Link>
            </Container>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute left-0 top-0 bottom-0 w-64 bg-white transform transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                ✕
              </button>
            </div>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href="#"
                  className="block px-4 py-2 text-sm hover:bg-gray-50 rounded-lg"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
