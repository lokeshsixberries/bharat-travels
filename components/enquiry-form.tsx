"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"

export function EnquiryForm({ destinationName = "" }: { destinationName?: string }) {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    // For now, we'll just show a success message
    setFormSubmitted(true)
  }

  if (formSubmitted) {
    return (
      <Card className="p-6 bg-green-50 border-green-200">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
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
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
          <p className="text-green-700">
            Your enquiry has been submitted successfully. Our team will contact you shortly.
          </p>
        </div>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input placeholder="Full Name *" required />
        </div>
        <div>
          <Input type="email" placeholder="Email Address *" required />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input type="tel" placeholder="Phone Number *" required />
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Number of Travelers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2">1-2 People</SelectItem>
              <SelectItem value="3-5">3-5 People</SelectItem>
              <SelectItem value="6-10">6-10 People</SelectItem>
              <SelectItem value="10+">More than 10 People</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Input type="date" placeholder="Travel Date" className="pl-10" />
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>
        <div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Trip Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-3">1-3 Days</SelectItem>
              <SelectItem value="4-7">4-7 Days</SelectItem>
              <SelectItem value="8-14">8-14 Days</SelectItem>
              <SelectItem value="15+">15+ Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Input
          placeholder="Destination"
          defaultValue={destinationName}
          className={destinationName ? "bg-gray-50" : ""}
          readOnly={!!destinationName}
        />
      </div>
      <div>
        <Textarea
          placeholder="Tell us about your requirements (vehicle preferences, places to visit, etc.)"
          className="min-h-[120px]"
        />
      </div>
      <Button type="submit" className="w-full">
        Submit Enquiry
      </Button>
    </form>
  )
}
