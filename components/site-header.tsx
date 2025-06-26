"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "/destinations", label: "Destinations" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

const PHONE_NUMBER = "+91 98765 43210";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="relative h-8 w-8">
            <Image
              src="/image.png"
              alt="Bharat Travels Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden text-xl font-bold sm:inline-block">
            Bharat Travels
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md font-semibold transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact Number */}
        <div className="hidden items-center gap-2 md:flex rainbow">
          <Phone className="h-4 w-4 text-orange-600" />
          <a href={`tel:${PHONE_NUMBER}`} className="text-md font-medium">
            {PHONE_NUMBER}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-50 border-b bg-background transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="container flex flex-col space-y-4 py-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-primary"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          {/* Contact Number for Mobile */}
          <div className="flex items-center gap-2 px-4 py-2">
            <Phone className="h-4 w-4 text-orange-600" />
            <a href={`tel:${PHONE_NUMBER}`} className="text-sm font-medium">
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}