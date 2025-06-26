"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Star,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SiteFooter } from "@/components/site-footer";
import { EnquiryForm } from "@/components/enquiry-form";
import { locations } from "@/constants/locations.js";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DestinationDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const pathname = usePathname();

  const destinationName = pathname.split("/")[2];
  const [randomDestinations, setRandomDestinations] = useState([]);

  const destination = locations.find(
    (location) => location?.name.toLowerCase() === destinationName.toLowerCase()
  );

  // randome location should be uniqe
  const GetRandomDestinations = () => {
    const randomDestinations = locations
      .filter(
        (location) =>
          location?.name.toLowerCase() !== destinationName.toLowerCase()
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    return randomDestinations;
  };

  useEffect(() => {
    const randomDestinations: any = GetRandomDestinations();
    setRandomDestinations(randomDestinations);
  }, [destination]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full overflow-hidden">
        <Image
          src={destination?.heroImage || "/placeholder.svg"}
          alt={destination?.name || ""}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30 flex flex-col justify-end px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center text-white/80 mb-2">
              <Link href="/destinations" className="hover:text-white">
                Destinations
              </Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span>{destination?.name}</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {destination?.name}
            </h1>
            <p className="mt-2 text-xl text-white/90">{destination?.title}</p>
            <div className="flex items-center mt-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white mr-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>Rajasthan, India</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Best time: {destination?.bestTimeToVisit}</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                <Clock className="h-4 w-4 mr-1" />
                <span>Duration: {destination?.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="w-full justify-start mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="attractions">Attractions</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                  <TabsTrigger value="nearby">Nearby Places</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-0">
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold mb-4">
                      About {destination?.name}
                    </h2>
                    <p className="text-gray-700 mb-6">
                      {destination?.description}
                    </p>

                    <h3 className="text-xl font-bold mb-3">History</h3>
                    <p className="text-gray-700 mb-6">{destination?.history}</p>

                    <div className="bg-orange-50 p-6 rounded-lg border border-orange-100 mb-6">
                      <h3 className="text-xl font-bold mb-3">Travel Tips</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="rounded-full bg-orange-100 p-1 mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-orange-600" />
                          </div>
                          <p>
                            Explore the area on foot or hire a local guide for a
                            deeper understanding of the history and culture.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="rounded-full bg-orange-100 p-1 mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-orange-600" />
                          </div>
                          <p>
                            Visit early in the morning to avoid crowds and heat,
                            especially during the summer.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="rounded-full bg-orange-100 p-1 mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-orange-600" />
                          </div>
                          <p>
                            Don't miss out on local cuisine — try the authentic
                            Rajasthani thali and popular street food.
                          </p>
                        </li>
                        <li className="flex items-start">
                          <div className="rounded-full bg-orange-100 p-1 mr-3 mt-1">
                            <ChevronRight className="h-3 w-3 text-orange-600" />
                          </div>
                          <p>
                            Shop for traditional textiles, jewelry, and
                            handicrafts in local markets to take home a piece of
                            Rajasthan.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="attractions" className="mt-0">
                  <h2 className="text-2xl font-bold mb-6">
                    Top Attractions in {destination?.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {destination?.attractions.map((attraction) => (
                      <Card key={attraction.name} className="overflow-hidden">
                        <div className="relative h-48 w-full">
                          <Image
                            src={attraction.image || "/placeholder.svg"}
                            alt={attraction.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-5">
                          <h3 className="text-xl font-semibold mb-2">
                            {attraction.name}
                          </h3>
                          <p className="text-gray-600">
                            {attraction.description}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="gallery" className="mt-0">
                  <h2 className="text-2xl font-bold mb-6">
                    {destination?.name} Gallery
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination?.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-64 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${destination?.name} - Image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="nearby" className="mt-0">
                  <h2 className="text-2xl font-bold mb-6">
                    Places Near {destination?.name}
                  </h2>
                  <div className="space-y-6">
                    {destination?.nearbyPlaces.map((place) => (
                      <div
                        key={place.name}
                        className="flex items-start border-b border-gray-200 pb-6"
                      >
                        <div className="rounded-full bg-orange-100 p-3 mr-4">
                          <MapPin className="h-5 w-5 text-orange-600" />
                        </div>
                        <div>
                          <div className="flex items-center mb-1">
                            <h3 className="text-xl font-semibold">
                              {place.name}
                            </h3>
                            <span className="ml-3 text-sm bg-gray-100 px-2 py-1 rounded-full">
                              {place.distance}
                            </span>
                          </div>
                          <p className="text-gray-600">{place.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Book Your Trip
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Ready to explore {destination?.name}? Contact us to book
                      your customized tour package with vehicle rental.
                    </p>
                    <Button className="w-full mb-3" asChild>
                      <Link href="/contact">Enquire Now</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/vehicles">View Vehicles</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Trip Highlights
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="rounded-full bg-orange-100 p-2 mr-3">
                          <Calendar className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium">Best Time to Visit</p>
                          <p className="text-gray-600 text-sm">
                            {destination?.bestTimeToVisit}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="rounded-full bg-orange-100 p-2 mr-3">
                          <Clock className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium">Recommended Duration</p>
                          <p className="text-gray-600 text-sm">
                            {destination?.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="rounded-full bg-orange-100 p-2 mr-3">
                          <Star className="h-4 w-4 text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium">Traveler Rating</p>
                          <div className="flex items-center">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(destination?.rating || 0)
                                      ? "text-yellow-500 fill-yellow-500"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-gray-600">
                              {destination?.rating}/5
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">
            More Destinations to Explore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* These would be dynamically generated based on related destinations */}
            {randomDestinations.map((destination: any) => (
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <Image
                    src={destination?.heroImage || "/placeholder.svg"}
                    alt={destination?.name || ""}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold mb-2">
                    {destination?.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {destination?.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {destination?.description.slice(0, 100)}
                  </p>
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(destination?.rating || 0)
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {destination?.rating}/5
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-orange-500 hover:bg-orange-600 font-bold text-white"
                    asChild
                  >
                    <Link href={`/destinations/${destination?.name}`}>
                      View Details <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Plan Your Visit to {destination?.name}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Fill out the form to get a customized quote for your{" "}
                {destination?.name} trip. Our travel experts will contact you
                with the best options.
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
                    Comfortable vehicles with experienced drivers
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-orange-600" />
                  </div>
                  <p className="text-gray-700">
                    Expert local guides who know the hidden gems
                  </p>
                </div>
              </div>
            </div>
            <EnquiryForm destinationName={destination?.name} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
