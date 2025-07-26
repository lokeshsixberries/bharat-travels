import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { tourVehicles } from "@/constants/vehilcles";

export function VehicleShowcase() {
  const vehicles = [
    {
      id: "tempo",
      name: "Tempo Traveller",
      image:
        "/placeholder.svg?height=300&width=500&query=tempo traveller van white",
      capacity: "12-16 Passengers",
      description: "Perfect for medium-sized groups and extended tours.",
    },
    {
      id: "sedan",
      name: "Sedan",
      image: "/elegant-white-sedan.png",
      capacity: "4 Passengers",
      description: "Comfortable sedans for city travel and small groups.",
    },
    {
      id: "suv",
      name: "SUV",
      image: "/white-urban-suv.png",
      capacity: "7 Passengers",
      description: "Spacious SUVs ideal for family trips and longer journeys.",
    },
  
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Vehicles
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Comfortable and well-maintained vehicles for your journey
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/vehicles">
              View All Vehicles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tourVehicles.map((vehicle) => (
            <Card
              key={vehicle.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.vehicleName}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {vehicle.vehicleName}
                </h3>
                <div className="flex items-center text-gray-700 mb-3">
                  <Users className="h-5 w-5 mr-2 text-orange-500" />
                  <span>{vehicle.passengerCount}</span>
                </div>
                <p className="text-gray-600 text-sm">{vehicle.vehicleDesc}</p>
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/vehicles">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
