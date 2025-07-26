"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { supabase } from "@/lib/supabase/client"
import { useToast } from "@/components/ui/use-toast"

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
  enquiry_date: string;
  enquiry_time: string;
}

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [state, setState] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
    enquiry_date: new Date().toISOString().split('T')[0],
    enquiry_time: new Date().toTimeString().split(' ')[0],
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const { data, error } = await supabase
        .from('Contact')
        .insert({
          ...state,
          enquiry_date: new Date().toISOString().split('T')[0],
          enquiry_time: new Date().toTimeString().split(' ')[0]
        })
        
      if (error) {
        throw error
      }

      await fetch("https://api.telegram.org/bot8350613954:AAHIuEllhXrM_22S5MA7QJjWEOJzVoZ5GnM/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "5013947387",
          text: `New Contact Enquiry from ${state.name}\n\nName: ${state.name}\nEmail: ${state.email}\nPhone: ${state.phone}\nMessage: ${state.message}`,
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
      setIsSubmitting(false)
    }
  }

  if (formSubmitted) {
    return (
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
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
          <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
          <p className="text-green-700">Thank you for contacting us. We'll get back to you as soon as possible.</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input 
            value={state.name}
            placeholder="Full Name *" 
            required 
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div>
          <Input 
            type="email" 
            value={state.email} 
            placeholder="Email Address *" 
            required 
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input 
            type="tel" 
            value={state.phone} 
            placeholder="Phone Number *" 
            required 
            onChange={(e) => setState({ ...state, phone: e.target.value })}
          />
        </div>
        <div>
          <Select 
            value={state.subject} 
            onValueChange={(value) => setState({ ...state, subject: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a subject *" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="booking">Booking Information</SelectItem>
              <SelectItem value="support">Customer Support</SelectItem>
              <SelectItem value="feedback">Feedback</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Textarea 
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })} 
          placeholder="Your Message *" 
          className="min-h-[150px]" 
          required 
        />
      </div>
      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}