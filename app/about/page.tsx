import Image from "next/image";
import Link from "next/link";
import { Check, Users, Award, ThumbsUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Banner */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/about1.jpg"
          alt="About Our Company"
          fill
          className="object-cover object-center h-[40vh] w-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About Our Company
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
              Your trusted partner for exploring the royal heritage of Rajasthan
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
              <p className="text-xl font-bold text-orange-600 sm:text-xl" style={{fontSize: '25px'}}>Serving With Pride for 20+ Years — Tempo Travels</p>
                <p>
                  Founded in 2000, Tempo Travels has been proudly serving
                  travelers for over two decades, offering reliable and
                  comfortable travel experiences across the vibrant state of
                  Rajasthan. What began as a humble journey with just two
                  vehicles is now a well-established travel service with a fleet
                  of more than 50 vehicles, backed by a dedicated team of
                  professional drivers and experienced tour guides.
                </p>
                <p>
                  Our story began with <b>Mr. Mohammad Ateek Samma</b>, a passionate
                  and visionary entrepreneur from Rajasthan, who started this
                  company with a mission to help people explore the cultural
                  richness, royal heritage, and scenic beauty of our land. With
                  his deep understanding of Rajasthani hospitality and a strong
                  commitment to quality, Mr. Samma built a name that people
                  trust and recommend.
                </p>
                <p>
                  Over the years, we've proudly served thousands of happy
                  clients from solo explorers to family vacationers and large
                  travel groups  making sure every journey is memorable, safe,
                  and full of discovery. Our focus on punctuality, cleanliness,
                  safety, and guest satisfaction has helped us earn a reputation
                  as one of the most reliable and friendly travel agencies in
                  Rajasthan.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/about-me.jpg"
                alt="Our Company Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full bg-orange-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  Customer First
                </h3>
                <p className="text-gray-600 text-center">
                  We prioritize our customers' needs and preferences, tailoring
                  our services to provide personalized travel experiences that
                  exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full bg-orange-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  Quality Service
                </h3>
                <p className="text-gray-600 text-center">
                  We are committed to maintaining the highest standards of
                  service quality, from well-maintained vehicles to
                  knowledgeable guides and drivers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="rounded-full bg-orange-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  Reliability
                </h3>
                <p className="text-gray-600 text-center">
                  We pride ourselves on being dependable and trustworthy,
                  ensuring that our services are delivered as promised, on time,
                  every time.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-center mb-8">Our Mission</h3>
            <p className="text-gray-600 text-center text-lg max-w-3xl mx-auto">
              "To showcase the rich cultural heritage and natural beauty of
              Rajasthan while providing safe, comfortable, and memorable travel
              experiences that create lasting connections between travelers and
              the heart of Rajasthan."
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart from other travel agencies in Rajasthan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="rounded-full bg-green-100 p-3 mr-4 flex-shrink-0">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Experienced Team
                  </h3>
                  <p className="text-gray-600">
                    Our team of drivers and guides have extensive knowledge of
                    Rajasthan's roads, tourist spots, and hidden gems, ensuring
                    you get the most out of your journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="rounded-full bg-green-100 p-3 mr-4 flex-shrink-0">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Well-Maintained Fleet
                  </h3>
                  <p className="text-gray-600">
                    Our vehicles undergo regular maintenance and thorough
                    cleaning to ensure your comfort and safety throughout your
                    journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="rounded-full bg-green-100 p-3 mr-4 flex-shrink-0">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Customized Packages
                  </h3>
                  <p className="text-gray-600">
                    We understand that every traveler is unique, which is why we
                    offer tailor-made packages that cater to your specific
                    preferences, budget, and schedule.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="rounded-full bg-green-100 p-3 mr-4 flex-shrink-0">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    24/7 Customer Support
                  </h3>
                  <p className="text-gray-600">
                    Our dedicated customer support team is available round the
                    clock to assist you with any queries or concerns during your
                    journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="rounded-full bg-green-100 p-3 mr-4 flex-shrink-0">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-gray-600">
                    We believe in honest and transparent pricing with no hidden
                    charges, ensuring you know exactly what you're paying for.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="rounded-full bg-green-100 p-3 mr-4 flex-shrink-0">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-gray-600">
                    Being locals, we have in-depth knowledge of Rajasthan's
                    culture, traditions, and lesser-known attractions that
                    typical tourists might miss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals behind our exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=indian businessman in formal attire"
                  alt="Rajesh Sharma - Founder & CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Rajesh Sharma</h3>
              <p className="text-orange-600">Founder & CEO</p>
              <p className="text-gray-600 mt-2">
                With over 20 years of experience in the travel industry, Rajesh
                leads our company with passion and vision.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=indian woman in business attire"
                  alt="Priya Patel - Operations Manager"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Priya Patel</h3>
              <p className="text-orange-600">Operations Manager</p>
              <p className="text-gray-600 mt-2">
                Priya ensures smooth day-to-day operations and coordinates our
                fleet to provide seamless service.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=indian man in casual business attire"
                  alt="Vikram Singh - Head of Tours"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Vikram Singh</h3>
              <p className="text-orange-600">Head of Tours</p>
              <p className="text-gray-600 mt-2">
                A history enthusiast with extensive knowledge of Rajasthan's
                heritage, Vikram designs our tour packages.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=indian woman in smart casual attire"
                  alt="Meera Joshi - Customer Relations"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Meera Joshi</h3>
              <p className="text-orange-600">Customer Relations</p>
              <p className="text-gray-600 mt-2">
                Meera leads our customer support team, ensuring every client
                receives personalized attention.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Achievements
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones that mark our journey of excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  20+
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Years of Experience
                </h3>
                <p className="text-gray-600">
                  Over a 20+ years of providing exceptional travel services in
                  Rajasthan.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  50+
                </div>
                <h3 className="text-xl font-semibold mb-2">Vehicles</h3>
                <p className="text-gray-600">
                  A diverse fleet of well-maintained vehicles to suit every
                  need.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  10,000+
                </div>
                <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
                <p className="text-gray-600">
                  Thousands of satisfied customers from across the globe.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  4.8/5
                </div>
                <h3 className="text-xl font-semibold mb-2">Average Rating</h3>
                <p className="text-gray-600">
                  Consistently high ratings and positive reviews from our
                  clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Ready to Explore Rajasthan with Us?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Contact us today to plan your perfect Rajasthan adventure with our
            experienced team.
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
              <Link href="/vehicles">View Our Fleet</Link>
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
