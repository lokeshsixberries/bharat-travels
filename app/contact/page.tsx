import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SiteFooter } from "@/components/site-footer";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Banner */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/contact.jpg"
          alt="Contact Us"
          fill
          priority
          style={{
            objectFit: "cover",
            objectPosition: "0% 45%",
            filter: "brightness(1.5)",
          }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
              We're here to help you plan your perfect Rajasthan adventure
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our services or need help planning your
                trip? Our team is ready to assist you. Reach out to us through
                any of the following channels or fill out the contact form.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="rounded-full bg-orange-100 p-3 mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Our Office</h3>
                    <p className="text-gray-600">
                      Ranakpur road, opposite reliance smart point,
                      <br />
                      Shastri Nagar, Falna, Rajasthan, 306116
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-orange-100 p-3 mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +91 96108 46782 (General Enquiries)
                      <br />
                      +91 96108 46782 (Booking & Reservations)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-orange-100 p-3 mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">masfalna2001@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="rounded-full bg-orange-100 p-3 mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                      <br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
{/* 
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="#"
                    className="rounded-full bg-gray-100 p-3 hover:bg-orange-100 transition-colors"
                  >
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
                      className="text-gray-600 hover:text-orange-600"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full bg-gray-100 p-3 hover:bg-orange-100 transition-colors"
                  >
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
                      className="text-gray-600 hover:text-orange-600"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full bg-gray-100 p-3 hover:bg-orange-100 transition-colors"
                  >
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
                      className="text-gray-600 hover:text-orange-600"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full bg-gray-100 p-3 hover:bg-orange-100 transition-colors"
                  >
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
                      className="text-gray-600 hover:text-orange-600"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </Link>
                </div>
              </div> */}
            </div>

            <div>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">
                    Send Us a Message
                  </h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Location</h2>
            <p className="mt-2 text-gray-600">
              Visit our office in the heart of Jaipur
            </p>
          </div>
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1385.2431681272153!2d73.23309269349329!3d25.242433259360986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3942912d4793f58f%3A0xb2890c2089bc62cf!2sBharat%20travels!5e1!3m2!1sen!2sin!4v1750182783845!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center top-1/2">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
                <h3 className="font-semibold mb-2">Bharat Travels, Falna</h3>
                <p className="text-sm text-gray-600">
                  Ranakpur road, opposite reliance smart point, Shastri Nagar,
                  Falna, Rajasthan 306116
                </p>
              </div>
            </div>
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
