import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Clock, CreditCard, Baby, Users, AlertTriangle, Shield, FileText, MapPin } from "lucide-react";

const Policies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <Hero 
          title="POLICIES & CONDITIONS"
          subtitle="Terms & Conditions"
          showCTA={false}
          height="h-[400px]"
        />

        {/* Conditions Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-display font-semibold text-center mb-16 text-foreground">
                Hotel Conditions & Policies
              </h2>
              
              {/* Check-in/Check-out */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Clock className="w-6 h-6 text-gold" />
                  Check-in & Check-out
                </h3>
                <div className="bg-card p-6 rounded-lg space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Check-in</h4>
                    <p className="text-muted-foreground">From 14:00. Guests are required to show a photo identification and credit card upon check-in.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Check-out</h4>
                    <p className="text-muted-foreground">Until 12:00</p>
                  </div>
                </div>
              </div>

              {/* Cancellation/Prepayment */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-gold" />
                  Cancellation / Prepayment
                </h3>
                <div className="bg-card p-6 rounded-lg">
                  <p className="text-muted-foreground">Cancellation and prepayment policies vary according to accommodation type. Please enter the dates of your stay and check the conditions of your required option.</p>
                </div>
              </div>

              {/* Children and Beds */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Baby className="w-6 h-6 text-gold" />
                  Children and Beds
                </h3>
                <div className="bg-card p-6 rounded-lg space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Child Policies</h4>
                    <p className="text-muted-foreground mb-2">Children of any age are welcome.</p>
                    <p className="text-muted-foreground">To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Cot and Extra Bed Policies</h4>
                    <div className="space-y-2">
                      <p className="text-muted-foreground"><strong>0 - 4 years:</strong></p>
                      <p className="text-muted-foreground ml-4">• Extra bed upon request: Rs. 1,500 per child, per night</p>
                      <p className="text-muted-foreground ml-4">• Cot upon request: Free</p>
                      <p className="text-muted-foreground"><strong>5+ years:</strong></p>
                      <p className="text-muted-foreground ml-4">• Extra bed upon request: Rs. 1,500 per person, per night</p>
                    </div>
                    <p className="text-muted-foreground mt-4 text-sm">Prices for cots and extra beds are not included in the total price, and will have to be paid for separately during your stay.</p>
                    <p className="text-muted-foreground text-sm">The number of extra beds and cots allowed is dependent on the option you choose. Please check your selected option for more information.</p>
                    <p className="text-muted-foreground text-sm">All cots and extra beds are subject to availability.</p>
                  </div>
                </div>
              </div>

              {/* Age Restrictions */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Users className="w-6 h-6 text-gold" />
                  Age Restrictions
                </h3>
                <div className="bg-card p-6 rounded-lg">
                  <p className="text-muted-foreground">There is no age requirement for check-in</p>
                </div>
              </div>

              {/* Pets Policy */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-gold" />
                  Pets
                </h3>
                <div className="bg-card p-6 rounded-lg">
                  <p className="text-muted-foreground">Pets are not allowed.</p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-gold" />
                  Accepted Payment Methods
                </h3>
                <div className="bg-card p-6 rounded-lg">
                  <p className="text-muted-foreground">Cash</p>
                </div>
              </div>

              {/* Important Considerations */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <FileText className="w-6 h-6 text-gold" />
                  To Consider
                </h3>
                <div className="bg-card p-6 rounded-lg space-y-4">
                  <div className="space-y-3">
                    <p className="text-muted-foreground">• Guests are required to show a photo identification upon check-in. For Indian nationals, this means a Driving license, Aadhar Card or any Government approved ID. PAN cards are not accepted. All foreign nationals are required to provide a valid passport and visa.</p>
                    
                    <p className="text-muted-foreground">• At check-in, all guests must present a valid proof of identification and of on-going travel.</p>
                    
                    <p className="text-muted-foreground">• <strong>Deposit policy:</strong> Full room payment as per the stay bill & Security money to be deposited for extras at the time of check-in.</p>
                    
                    <p className="text-muted-foreground">• Outside Food and Liquor is not allowed in the Room.</p>
                    
                    <p className="text-muted-foreground">• Hotel does not allow Private Parties or Events in the guest rooms.</p>
                    
                    <p className="text-muted-foreground">• Visitors are not allowed in the guest floors to prevent the possible spread of covid-19.</p>
                    
                    <p className="text-muted-foreground">• The hotel reserves the right of admission. For local residents accommodation can be denied.</p>
                    
                    <p className="text-muted-foreground">• The primary guest checking in to the hotel must be at least 18 years of age. Children accompanying adults must be between 1-12 years. Guests below 18 years will not be given check-in alone.</p>
                    
                    <p className="text-muted-foreground">• Guests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-12">
                <h3 className="text-2xl font-display font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Shield className="w-6 h-6 text-gold" />
                  Other Information
                </h3>
                <div className="bg-card p-6 rounded-lg space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Other Known Names for The Ashok Hotel</h4>
                    <p className="text-muted-foreground">The Ashok is also known by various other names in different booking platforms and travel guides.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Frequently Asked Questions</h4>
                    <p className="text-muted-foreground">For frequently asked questions about The Ashok Hotel, please contact our front desk or visit our main information desk.</p>
                  </div>
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

export default Policies;
