import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center">
                <span className="text-xl font-display font-semibold text-gold">A</span>
              </div>
              <span className="text-xl font-display font-semibold">Ashok Hotels</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Luxury accommodations and refined hospitality in an elegant setting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/rooms" className="text-sm hover:text-gold transition-colors">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link to="/dining" className="text-sm hover:text-gold transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-gold" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-gold" />
                <span>info@ashokhotels.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-gold" />
                <span>123 Luxury Lane, Paradise City</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Subscribe to receive exclusive offers and updates.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md bg-background/10 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <button className="px-4 py-2 rounded-md bg-gold text-primary-foreground text-sm font-medium hover:bg-gold-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Ashok Hotels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
