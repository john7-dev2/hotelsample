import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <Hero 
          title="CONTACT US"
          subtitle="Get In Touch"
          showCTA={false}
          height="h-[400px]"
        />

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-display font-semibold mb-6 text-foreground">
                    Send Us a Message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          First Name
                        </label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-foreground">
                          Last Name
                        </label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Email
                      </label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Phone
                      </label>
                      <Input type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">
                        Message
                      </label>
                      <Textarea 
                        placeholder="How can we help you?"
                        rows={6}
                      />
                    </div>
                    <Button variant="gold" size="lg" className="w-full">
                      SEND MESSAGE
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
                  <h2 className="text-3xl font-display font-semibold mb-6 text-foreground">
                    Contact Information
                  </h2>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-semibold mb-2 text-foreground">
                          Address
                        </h3>
                        <p className="text-muted-foreground">
                          123 Marine Drive<br />
                          Mumbai, MH 400001<br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-semibold mb-2 text-foreground">
                          Phone
                        </h3>
                        <p className="text-muted-foreground">
                          Reception: +91 22 6789 1234<br />
                          Reservations: +91 22 6789 1235
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-semibold mb-2 text-foreground">
                          Email
                        </h3>
                        <p className="text-muted-foreground">
                          General: info@grandpalace.com<br />
                          Reservations: reservations@grandpalace.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-lg font-display font-semibold mb-2 text-foreground">
                          Hours
                        </h3>
                        <p className="text-muted-foreground">
                          Check-in: 3:00 PM<br />
                          Check-out: 11:00 AM<br />
                          Front Desk: 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="h-96 bg-card rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gold/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">Map Integration</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
