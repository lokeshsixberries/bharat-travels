import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "United Kingdom",
      image: "/placeholder.svg?height=200&width=200&query=woman tourist portrait",
      quote:
        "Our trip to Rajasthan was absolutely magical! The driver was professional and knowledgeable, and the vehicle was comfortable. We visited all the major attractions with ease. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "David Chen",
      location: "Singapore",
      image: "/placeholder.svg?height=200&width=200&query=asian man tourist portrait",
      quote:
        "The service was exceptional from start to finish. Our guide knew all the hidden gems of Rajasthan, and the vehicle was perfect for our family of six. We'll definitely use their services again!",
      rating: 5,
    },
    {
      id: 3,
      name: "Priya Sharma",
      location: "Mumbai, India",
      image: "/placeholder.svg?height=200&width=200&query=indian woman portrait",
      quote:
        "As a solo female traveler, safety was my priority. The team made me feel secure throughout my journey. The driver was respectful and the vehicle was well-maintained. A wonderful experience!",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Customers Say</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from travelers who have experienced our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-500 mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
