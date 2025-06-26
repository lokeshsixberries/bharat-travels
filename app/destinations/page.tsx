"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar } from "lucide-react";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SiteFooter } from "@/components/site-footer";
import { locations } from "@/constants/locations.js";
import { useEffect, useState } from "react";

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredLocations, setFilteredLocations] = useState(locations);

  useEffect(() => {
    const filtered = locations.filter((location) => {
      const matchesSearch = location.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesDuration =
        selectedDuration === "" || location.duration === selectedDuration;
      return matchesSearch && matchesDuration;
    });
    setFilteredLocations(filtered);
  }, [searchQuery, selectedDuration]);

  const applyFilters = () => {
    const filtered = locations.filter((location) => {
      return location.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredLocations(filtered);
  };

  console.log("selectedDuration", selectedDuration);
  console.log("selectedCategory", selectedCategory);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Banner */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/location2.jpg"
          alt="Rajasthan Destinations"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "40% 10%" }}
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Explore Rajasthan Destinations
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
              Discover the royal heritage, vibrant culture, and breathtaking
              landscapes of Rajasthan
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search destinations..."
                className="w-full rounded-full h-12 px-6"
                onChange={(e) => setSearchQuery(e.target.value)}
               
              />
            </div>
            {/* <div className="w-full md:w-48">
              <Select onValueChange={(value) => setSelectedDuration(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-day">1 Day</SelectItem>
                  <SelectItem value="2-3-days">2-3 Days</SelectItem>
                  <SelectItem value="4-plus-days">4+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full md:w-48">
              <Select onValueChange={(value) => setSelectedCategory(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="heritage">Heritage</SelectItem>
                  <SelectItem value="nature">Nature</SelectItem>
                  <SelectItem value="spiritual">Spiritual</SelectItem>
                  <SelectItem value="wildlife">Wildlife</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
            <Button className="w-full h-12 rounded-full px-6 md:w-auto" onClick={applyFilters}>
              Search
            </Button>
          </div>
        </div>
      </section>

      {(filteredLocations || []).length === 0 && (
        <>
          <p
            className="text-center text-orange-500 font-bold h-[50vh]"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              border: "none",
            }}
          >
            <img
              src="https://cdn.dribbble.com/userupload/36016279/file/original-a7b7223a9d22f6f90015deb8d9ad0d9d.png?resize=1504x1128&vertical=center"
              alt="No Data"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "50px",
                border: "none",
              }}
            />
          </p>
        </>
      )}

      {/* Destinations Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLocations.map((destination) => (
              <Card
                key={destination?.name}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={destination.heroImage || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">
                      {destination?.name}
                    </h3>
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded text-sm">
                      <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                      <span className="font-medium">{destination?.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {(destination?.description || "").slice(0, 150)+`...`}
                  </p>
                  <div className="flex items-center text-gray-500 mb-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Rajasthan, India</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Recommended: {destination?.duration}</span>
                  </div>
                </CardContent>
                <CardFooter className="px-6 py-4 bg-gray-50 border-t">
                  <Button asChild className="w-full">
                    <Link href={`/destinations/${destination?.name}`}>
                      View Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Ready to Explore Rajasthan?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Contact us today to plan your perfect Rajasthan adventure with
            comfortable vehicles and expert guides.
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
              <Link href="/vehicles">View Vehicles</Link>
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
