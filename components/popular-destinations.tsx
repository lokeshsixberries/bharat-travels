"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { locations } from "@/constants/locations";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function PopularDestinations() {
  interface Destination {
    name: string;
    description: string;
    rating: number;
    heroImage: string;
  }

  const [destinations, setDestinations] = useState<Destination[]>([]);
  const router = useRouter();

  const GetRajasthanLocations = () => {
    return locations
      .filter((location) => location)
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
  };

  useEffect(() => {
    const randomDestinations: any = GetRajasthanLocations();
    setDestinations(randomDestinations);
  }, [router]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Popular Destinations
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Explore the most visited places in Rajasthan
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link href="/destinations">
              View All Destinations <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination?.name}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  style={{ objectFit: "cover" }}
                  src={destination?.heroImage || "/placeholder.svg"}
                  alt={destination?.name}
                  fill
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold mb-2">
                  {destination?.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {(destination?.description || "").slice(0, 100) + `...`}
                </p>
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
              </CardContent>
              <CardFooter className="p-5 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-orange-500 hover:bg-orange-600 font-bold text-white"
                  asChild
                >
                  <Link href={`/destinations/${destination?.name}`}>
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
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
