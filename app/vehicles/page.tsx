import Link from "next/link";
import Image from "next/image";
import { Users, Fuel, Briefcase, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SiteFooter } from "@/components/site-footer";
import { vehicleData } from "@/constants/vechiles.js";

export default function VehiclesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/buses.jpg"
          alt="Our Vehicle Fleet"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "40% 45%" }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Vehicle Fleet
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
              Comfortable, well-maintained vehicles for your Rajasthan journey
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white ">
        <div className="max-w-7xl mx-auto py-4">
          <Tabs defaultValue="cars" className="w-full">
            <TabsList className="w-full justify-center mb-8">
              <TabsTrigger className="py-2" value="cars">Cars</TabsTrigger>
              <TabsTrigger className="py-2" value="luxury">Luxury Vehicles</TabsTrigger>
              <TabsTrigger className="py-2" value="tempo">Tempo Travellers</TabsTrigger>
              <TabsTrigger className="py-2" value="bus">Buses</TabsTrigger>
            </TabsList>

            {Object.entries(vehicleData).map(([category, vehicles]) => {
              // if (category === "categories" || category === "all") return null;

              return (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vehicles.map((vehicle) => (
                      <Card
                        key={vehicle.id}
                        className="overflow-hidden border-[#eee] hover:border-[#eee] hover:shadow-xl transition-shadow"
                      >
                        <div className="relative h-48 w-full">
                          <Image
                            src={vehicle.image || "/placeholder.svg"}
                            alt={vehicle.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                            {vehicle.name}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {vehicle.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center text-gray-700">
                              <Users className="h-5 w-5 mr-2 text-orange-500" />
                              <span>{vehicle.capacity}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <Briefcase className="h-5 w-5 mr-2 text-orange-500" />
                              <span>{vehicle.luggage}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <Fuel className="h-5 w-5 mr-2 text-orange-500" />
                              <span>Diesel</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <Check className="h-5 w-5 mr-2 text-green-500" />
                              <span>
                                AC {vehicle.ac ? "Available" : "Not Available"}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="bg-gray-50 border-t p-6"> 
                          <div className="w-full">
                            {/* <div className="flex justify-between items-center mb-4">
                              <span className="font-semibold">Rate:</span>
                              <span className="text-orange-600 font-bold">
                                {vehicle.rate}
                              </span>
                            </div>
                            <div className="flex justify-between items-center mb-6">
                              <span className="font-semibold">Min Hire:</span>
                              <span>{vehicle.minHire}</span>
                            </div> */}
                            <Button className="w-full" asChild>
                              <Link href={`/contact?vehicle=${vehicle.id}`}>
                                Book Now
                              </Link>
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Rental Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Rental Information
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our vehicle rental services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Rental Inclusions
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Professional, experienced driver</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fuel costs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Vehicle maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Driver accommodation & meals</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>All taxes and parking fees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Booking Terms</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>50% advance payment to confirm booking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Free cancellation up to 48 hours before trip</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Minimum booking of 300 km per day</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Extra charges for interstate permits</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>GST applicable as per government norms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Additional Services
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Professional tour guides (multiple languages)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Hotel bookings at preferred rates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Airport/railway station transfers</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom itinerary planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Special event transportation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Common questions about our vehicle rental services
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">
                Can I hire a vehicle without a driver?
              </h3>
              <p className="text-gray-600">
                No, all our vehicles come with experienced drivers who are
                familiar with Rajasthan's roads and tourist destinations. This
                ensures your safety and convenience throughout the journey.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">
                What is the minimum rental period?
              </h3>
              <p className="text-gray-600">
                The minimum rental period is one day (24 hours) with a minimum
                of 300 km per day. For shorter durations, please contact us for
                special arrangements.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">
                Are there any hidden charges?
              </h3>
              <p className="text-gray-600">
                No, we believe in transparent pricing. The quoted rate includes
                fuel, driver allowance, taxes, and parking fees. Additional
                charges may apply for interstate permits or night driving after
                10 PM.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">
                How do I make a booking?
              </h3>
              <p className="text-gray-600">
                You can book through our website, by calling our customer
                service, or by sending us a WhatsApp message. A 50% advance
                payment is required to confirm your booking.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">
                What is your cancellation policy?
              </h3>
              <p className="text-gray-600">
                Free cancellation up to 48 hours before the trip. Cancellations
                within 48 hours will incur a 25% charge, and cancellations
                within 24 hours will incur a 50% charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Ready to Book Your Vehicle?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Contact us today to book your perfect vehicle for exploring
            Rajasthan with comfort and style.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-orange-600 hover:bg-white/90 border-white"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              className="bg-white/20 hover:bg-white/30 border-white/40"
            >
              <Link href="/destinations">View Destinations</Link>
            </Button>
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
