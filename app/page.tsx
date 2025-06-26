import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { EnquiryForm } from "@/components/enquiry-form";
import { PopularDestinations } from "@/components/popular-destinations";
import { VehicleShowcase } from "@/components/vehicle-showcase";
import { Testimonials } from "@/components/testimonials";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/locations/img1.jpg"
          alt="Rajasthan Tourism"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Discover the Magic of Rajasthan
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/90">
              Discover the essence of royal heritage, vibrant culture, and
              stunning landscapes with our premium vehicle rentals and expertly
              guided tours crafted for an unforgettable journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                style={{ fontWeight: "600" }}
                size="lg"
                asChild
                className="bg-orange-500"
              >
                <Link href="/destinations">Explore Destinations</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                style={{ fontWeight: "600" }}
                className="bg-white text-orange-500"
                asChild
              >
                <Link href="/vehicles">View Vehicles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Premium Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Customized travel experiences designed to immerse you in the heart
              of Rajasthan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-orange-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-orange-600"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Premium Vehicle Rentals
                </h3>
                <p className="text-gray-600 text-left">
                  Choose from our fleet of meticulously maintained vehicles for
                  a smooth and comfortable journey across the enchanting
                  landscapes of Rajasthan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Guided Tours
                </h3>
                <p className="text-gray-600 text-center">
                  Let our expert local guides unveil Rajasthan’s hidden gems and
                  bring its rich history to life.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Custom Packages
                </h3>
                <p className="text-gray-600 text-center">
                  Tailor-made travel packages crafted to suit your unique
                  preferences, budget, and schedule—ensuring a seamless
                  Rajasthan experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <PopularDestinations />

      {/* Vehicle Showcase */}
      <VehicleShowcase />

      {/* Enquiry Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Plan Your Rajasthan Adventure
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form to get a customized quote for your Rajasthan
                trip. Our travel experts will contact you with the best options.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-orange-600" />
                  </div>
                  <p className="text-gray-700">
                    Personalized itineraries based on your interests
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-orange-600" />
                  </div>
                  <p className="text-gray-700">
                    Flexible booking options with free cancellation
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-orange-600" />
                  </div>
                  <p className="text-gray-700">
                    24/7 customer support throughout your journey
                  </p>
                </div>
              </div>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <SiteFooter />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
