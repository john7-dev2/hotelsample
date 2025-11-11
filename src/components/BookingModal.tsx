import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar, Users, Phone, Mail, CreditCard, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  roomName: string;
  roomPrice: string;
}

interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialRequests: string;
}

const BookingModal = ({ isOpen, onClose, roomName, roomPrice }: BookingModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    checkIn: "",
    checkOut: "",
    guests: "1",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  const calculateTotal = () => {
    const nights = calculateNights();
    const pricePerNight = parseInt(roomPrice.replace(/[₹,]/g, ""));
    return nights * pricePerNight;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.checkIn || !formData.checkOut || !formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Validate dates
    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn < today) {
      toast({
        title: "Invalid Date",
        description: "Check-in date cannot be in the past.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    if (checkOut <= checkIn) {
      toast({
        title: "Invalid Date",
        description: "Check-out date must be after check-in date.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate booking process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call

      toast({
        title: "Booking Confirmed! 🎉",
        description: `Your reservation for ${roomName} has been confirmed. You will receive a confirmation email shortly.`,
      });

      // Reset form and close modal
      setFormData({
        checkIn: "",
        checkOut: "",
        guests: "1",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        specialRequests: "",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nights = calculateNights();
  const total = calculateTotal();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display">Book Your Stay</DialogTitle>
          <DialogDescription>
            Complete your reservation for {roomName} at Grand Palace Hotel
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Room Summary */}
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">{roomName}</h3>
            <p className="text-muted-foreground">Starting from {roomPrice}/night</p>
          </div>

          {/* Dates and Guests */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="checkIn" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Check-in Date *
              </Label>
              <Input
                id="checkIn"
                type="date"
                value={formData.checkIn}
                onChange={(e) => handleInputChange("checkIn", e.target.value)}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <Label htmlFor="checkOut" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Check-out Date *
              </Label>
              <Input
                id="checkOut"
                type="date"
                value={formData.checkOut}
                onChange={(e) => handleInputChange("checkOut", e.target.value)}
                required
                min={formData.checkIn || new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <Label htmlFor="guests" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Guests *
              </Label>
              <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Booking Summary */}
          {nights > 0 && (
            <div className="bg-card p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Booking Summary</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>{roomPrice} × {nights} night{nights > 1 ? 's' : ''}</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total</span>
                  <span className="text-gold">₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          {/* Guest Information */}
          <div>
            <h4 className="font-semibold mb-4">Guest Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Textarea
              id="specialRequests"
              placeholder="Any special requests or requirements..."
              value={formData.specialRequests}
              onChange={(e) => handleInputChange("specialRequests", e.target.value)}
              rows={3}
            />
          </div>

          {/* Payment Notice */}
          <div className="bg-muted p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-gold mt-0.5" />
              <div>
                <h4 className="font-semibold mb-1">Payment Information</h4>
                <p className="text-sm text-muted-foreground">
                  Full room payment and security deposit will be collected at check-in. 
                  A valid photo ID and credit card are required upon arrival.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="gold"
              className="flex-1"
              disabled={isSubmitting || nights === 0}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Confirm Booking
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
