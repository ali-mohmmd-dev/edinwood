"use client";

import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import PageHero from "@/components/site/PageHero";
import { MapPin, Phone, Mail, Clock, Send, Map as MapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero 
        title="Contact Us" 
        subtitle="We would love to hear from you. Reach out to our team to schedule a visit or ask any questions." 
      />

      <section className="py-16 md:py-24">
        <div className="container-x">
          
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            
            {/* Left Col: Contact Information */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">Get in touch</span>
                <h2 className="font-display text-3xl md:text-4xl text-burgundy mt-3 mb-6">Contact Information</h2>
                <p className="text-muted-foreground leading-[1.7] mb-8">
                  Whether you are a prospective parent, a current family, or seeking career opportunities, our doors are always open.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 bg-secondary rounded-full flex items-center justify-center text-burgundy">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Campus Address</h4>
                    <div className="text-muted-foreground leading-[1.6]">
                      Thozhookkara, Thanneercode P.O.,<br />
                      Palakkad District,<br />
                      Kerala — 679536
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 bg-secondary rounded-full flex items-center justify-center text-burgundy">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Phone Numbers</h4>
                    <div className="text-muted-foreground leading-[1.6]">
                      <span className="font-medium text-ink/70">Main Office:</span> +91 9072 888 116<br />
                      <span className="font-medium text-ink/70">Admissions:</span> +91 8943 442 226<br />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 bg-secondary rounded-full flex items-center justify-center text-burgundy">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Email Departments</h4>
                    <div className="text-muted-foreground leading-[1.6]">
                      <span className="font-medium text-ink/70">General & Admissions:</span> admin@edinwood.com<br />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 bg-secondary rounded-full flex items-center justify-center text-burgundy">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink mb-1">Office Hours</h4>
                    <div className="text-muted-foreground leading-[1.6]">
                      Monday – Friday: 8:45 AM – 4:30 PM<br />
                      1st Saturday of month: 8:45 AM – 4:30 PM<br />
                      Sunday & Public Holidays: Closed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white shadow-card border border-border/50 p-8 md:p-12">
                <h3 className="font-display text-2xl text-burgundy mb-2">Send us a message</h3>
                <p className="text-muted-foreground mb-8">Fill out the form below and we will get back to you shortly.</p>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-burgundy">First Name</label>
                      <input type="text" className="w-full h-12 rounded-lg border border-border px-4 focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-colors" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-burgundy">Last Name</label>
                      <input type="text" className="w-full h-12 rounded-lg border border-border px-4 focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-colors" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-burgundy">Email Address</label>
                      <input type="email" className="w-full h-12 rounded-lg border border-border px-4 focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-colors" placeholder="jane@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-burgundy">Phone Number</label>
                      <input type="tel" className="w-full h-12 rounded-lg border border-border px-4 focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-colors" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-burgundy">Department to Contact</label>
                    <select className="w-full h-12 rounded-lg border border-border px-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-colors">
                      <option>Admissions & Enrollment</option>
                      <option>General Enquiry</option>
                      <option>Principal's Office</option>
                      <option>Billing & Accounts</option>
                      <option>Career Opportunities</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-burgundy">Your Message</label>
                    <textarea rows={5} className="w-full rounded-lg border border-border p-4 focus:outline-none focus:ring-2 focus:ring-burgundy/20 focus:border-burgundy transition-colors resize-y" placeholder="How can we help you?"></textarea>
                  </div>

                  <Button size="lg" type="submit" className="w-full h-14 rounded-xl bg-burgundy hover:bg-burgundy-deep text-white font-semibold text-lg">
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] md:h-[500px] bg-secondary relative overflow-hidden">
        {/* Placeholder for an actual Google Map embed, styling it to look like a map area */}
        <div className="absolute inset-0 bg-ink/5 flex items-center justify-center border-t border-border">
          <div className="text-center">
            <MapIcon className="h-16 w-16 text-burgundy/40 mx-auto mb-4" />
            <h3 className="font-display text-2xl text-burgundy mb-2">Interactive Campus Map</h3>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              [Google Maps Embed would go here in production showing Thozhookkara, Thanneercode P.O., Kerala]
            </p>
            <Button asChild variant="outline" className="rounded-full bg-white">
              <Link href="https://maps.app.goo.gl/GTwSscnTnhxPvje9A">Open in Google Maps</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
