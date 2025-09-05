"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Get form values
    const firstName = formData.get("firstName")?.toString().trim();
    const lastName = formData.get("lastName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const service = formData.get("service")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    // Validate required fields
    if (!firstName) {
      toast.error("First Name Is Required");
      setIsSubmitting(false);
      return;
    }

    if (!lastName) {
      toast.error("Last Name Is Required");
      setIsSubmitting(false);
      return;
    }

    if (!email) {
      toast.error("Email Name Is Required");
      setIsSubmitting(false);
      return;
    }

    if (!service) {
      toast.error("Service Is Required");
      setIsSubmitting(false);
      return;
    }

    if (!message) {
      toast.error("Message Is Required");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid Email");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      firstName,
      lastName,
      email,
      phone: phone || null,
      service,
      message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Check if response is ok
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server response:", errorText);
        throw new Error(`Server error: ${res.status}`);
      }

      // Try to parse JSON response
      let result;
      try {
        result = await res.json();
      } catch (parseError) {
        console.error("JSON parse error:", parseError);
        throw new Error("Invalid response from server");
      }

      // Success
      toast.success("Enquiry Sent.");

      form.reset();
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast.error("Cannot Send Message");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="border-gray-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-gray-900 text-xl">
          Send us a Message
        </CardTitle>
        <CardDescription className="text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                First Name *
              </label>
              <Input
                name="firstName"
                placeholder="John"
                className="border-gray-300 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Last Name *
              </label>
              <Input
                name="lastName"
                placeholder="Doe"
                className="border-gray-300 focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Email Address *
            </label>
            <Input
              name="email"
              type="email"
              placeholder="john@company.com"
              className="border-gray-300 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Phone Number
            </label>
            <Input
              name="phone"
              type="tel"
              placeholder="+91 9876543210"
              className="border-gray-300 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Service Required *
            </label>
            <select
              name="service"
              className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
              required
            >
              <option value="">Select a service</option>
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>AI Calling Agents</option>
              <option>AI Chatbots</option>
              <option>Branding & Identity</option>
              <option>Digital Marketing</option>
              <option>SEO & Content</option>
              <option>Influencer Marketing</option>
              <option>Market Research</option>
              <option>Staffing Solutions</option>
              <option>Custom Software</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Project Details *
            </label>
            <Textarea
              name="message"
              placeholder="Please describe your project requirements, timeline, and any specific features you need..."
              className="border-gray-300 focus:border-blue-500 min-h-[120px]"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our{" "}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">
              privacy policy
            </a>{" "}
            and terms of service.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
