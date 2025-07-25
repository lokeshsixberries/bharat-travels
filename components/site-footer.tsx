'use client';

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "../hooks/use-toast";
import { supabase } from "../lib/supabase/client";

export function SiteFooter() {
  const { toast } = useToast()
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('Newsletter')
        .insert({ email: email,date:new Date().toISOString().split('T')[0] })
      if (error) {
        throw error
      }
      setLoading(false);
    toast({
      title: "Success",
      description: "You have successfully subscribed to our newsletter.",
      variant: "default",

    })

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }
    setEmail('')
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative h-10 w-10 mr-3">
                <Image
                  src="/image.png"
                  alt="Rajasthan Travels Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">
                Rajasthan Travels
              </h3>
            </div>
            <p className="mb-4">
              Your trusted partner for exploring the royal heritage of Rajasthan
              with comfortable vehicles and expert guides.
            </p>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-orange-500" />
                <span>
                  Shastri Nagar, Falna, Rajasthan 306116
                </span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-orange-500" />
                <span>+91 96108 46782</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-orange-500" />
                <span>masfalna@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-orange-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-orange-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="hover:text-orange-400 transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/vehicles"
                  className="hover:text-orange-400 transition-colors"
                >
                  Vehicles
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Popular Destinations
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/destinations/jaipur"
                  className="hover:text-orange-400 transition-colors"
                >
                  Jaipur
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/udaipur"
                  className="hover:text-orange-400 transition-colors"
                >
                  Udaipur
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/jodhpur"
                  className="hover:text-orange-400 transition-colors"
                >
                  Jodhpur
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/jaisalmer"
                  className="hover:text-orange-400 transition-colors"
                >
                  Jaisalmer
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/pushkar"
                  className="hover:text-orange-400 transition-colors"
                >
                  Pushkar
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Newsletter
            </h3>
            <p className="mb-4">
              Subscribe to our newsletter for travel tips and special offers.
            </p>
            <form className="space-y-2">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email} 
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                onClick={handleSubmit}
                className="w-full px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
              >
                {loading ? "Loading..." : "Subscribe"}
              </button>
            </form>
            {/* <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div> */}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} Bharat Travels. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-orange-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-orange-400 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-orange-400 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
