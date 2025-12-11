import { Facebook, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.svg" alt="Logo" className="h-12 w-12" />
              <div className="font-bold text-xl tracking-tight">ASIA INFINITY</div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              We specializes in the safe and efficient transport of super heavy and oversized loads. Our team of professionals and advanced equipment ensure that your cargo arrives at its destination in perfect condition.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/profile.php?id=100086092939932" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 hover:bg-blue-600 transition-all duration-300 rounded-lg p-3 group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/company/asia-infinity-solutions/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 hover:bg-blue-700 transition-all duration-300 rounded-lg p-3 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-slate-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Our Capabilities */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Our Capabilities</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start group">
                <span className="mr-3 text-blue-500 group-hover:text-blue-400 transition-colors">•</span>
                <span className="group-hover:text-white transition-colors">Super Heavy Transport</span>
              </li>
              <li className="flex items-start group">
                <span className="mr-3 text-blue-500 group-hover:text-blue-400 transition-colors">•</span>
                <span className="group-hover:text-white transition-colors">Oversized Air Cargo</span>
              </li>
              <li className="flex items-start group">
                <span className="mr-3 text-blue-500 group-hover:text-blue-400 transition-colors">•</span>
                <span className="group-hover:text-white transition-colors">Heavy Lift & Crane Hire</span>
              </li>
              <li className="flex items-start group">
                <span className="mr-3 text-blue-500 group-hover:text-blue-400 transition-colors">•</span>
                <span className="group-hover:text-white transition-colors">Oversized Marine Cargo</span>
              </li>
              <li className="flex items-start group">
                <span className="mr-3 text-blue-500 group-hover:text-blue-400 transition-colors">•</span>
                <span className="group-hover:text-white transition-colors">Warehouse & Open Yard Facilities</span>
              </li>
              <li className="flex items-start group">
                <span className="mr-3 text-blue-500 group-hover:text-blue-400 transition-colors">•</span>
                <span className="group-hover:text-white transition-colors">Customs Clearance & OGA Permit Application</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-blue-500 transition-colors inline-flex items-center group">
                  <span>Home</span>
                  <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-blue-500 transition-colors inline-flex items-center group">
                  <span>About Us</span>
                  <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-blue-500 transition-colors inline-flex items-center group">
                  <span>Our Services</span>
                  <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-blue-500 transition-colors inline-flex items-center group">
                  <span>Contact Us</span>
                  <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-500" />
                <span className="text-slate-400">No. 8-3, Jalan Puteri 4/2, Bandar Puteri, 47100 Puchong, Selangor D.E</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <a href="tel:+60173958905" className="text-slate-400 hover:text-blue-500 transition-colors">+6 017 - 3958 905</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-blue-500" />
                <a href="mailto:shipping@asiainfinitysolutions.com" className="text-slate-400 hover:text-blue-500 transition-colors break-all">shipping@asiainfinitysolutions.com</a>
              </li>
            </ul>

            <Button 
              asChild 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-300 px-6 py-6 font-semibold text-base group"
            >
              <Link to="/contact" className="flex items-center justify-center">
                <span>Get In Touch</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2025 Asia Infinity Solutions Sdn. Bhd. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-blue-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}