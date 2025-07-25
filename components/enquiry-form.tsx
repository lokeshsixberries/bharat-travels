"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import {supabase} from "@/lib/supabase/client"
import { useToast } from "@/components/ui/use-toast"

export function EnquiryForm({ destinationName = "" }: { destinationName?: string }) {
  const { toast } = useToast()
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
    
interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  people: string;
  date: string;
  duration: string;
  destination: string;
  message: string;
  enquiry_date: string;
  enquiry_time: string;
}

    const [state, setState] = useState<EnquiryFormData>({
      name: "",
      email: "",
      phone: "",
      people: "",
      date: "",
      duration: "",
      destination: destinationName,
      message: "",
      enquiry_date: new Date().toISOString().split("T")[0],
      enquiry_time: new Date().toTimeString().split(" ")[0],
    });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('Enquiry')
        .insert({
          ...state,
        })
        
      if (error) {
        throw error
      }

      await fetch("https://api.telegram.org/bot8212234180:AAF5grR8Y368lRXiscxzsj3SYBKj11dW8bU/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "1060120862",
          text: `New Enquiry from ${state.name}\n\nName: ${state.name}\nEmail: ${state.email}\nPhone: ${state.phone}\nPeople: ${state.people}\nDate: ${state.date}\nDuration: ${state.duration}\nDestination: ${state.destination}\nMessage: ${state.message}`,
        }),
      })

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      })
      setFormSubmitted(true)
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
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
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input placeholder="Full Name *" required onChange={(e) => setState({ ...state, name: e.target.value })} value={state.name} />
        </div>
        <div>
          <Input type="email" placeholder="Email Address *" required onChange={(e) => setState({ ...state, email: e.target.value })} value={state.email}/>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input type="tel" placeholder="Phone Number *" required onChange={(e) => setState({ ...state, phone: e.target.value })} value={state.phone}/>
        </div>
        <div>
          <Select onValueChange={(value) => setState({ ...state, people: value })} value={state.people}>
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
          <Input type="date" placeholder="Travel Date" className="pl-10" required onChange={(e) => setState({ ...state, date: e.target.value })} value={state.date}/>
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        </div>
        <div>
          <Select onValueChange={(value) => setState({ ...state, duration: value })} value={state.duration}>
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
          required
          placeholder="Destination"
          defaultValue={destinationName}
          className={destinationName ? "bg-gray-50" : ""}
          readOnly={!!destinationName}
        />
      </div>
      <div>
        <Textarea
          required
          placeholder="Tell us about your requirements (vehicle preferences, places to visit, etc.)"
          className="min-h-[120px]"
          onChange={(e) => setState({ ...state, message: e.target.value })}
          value={state.message}
        />
      </div>
      <Button disabled={loading}  type="button" className="w-full" onClick={handleSubmit}>
       {loading ? "Submitting..." : "Submit Enquiry"}
      </Button>
    </form>
  )
}
