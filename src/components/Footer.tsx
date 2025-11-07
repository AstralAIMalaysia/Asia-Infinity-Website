import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#001529] text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo.svg" alt="Logo" className="h-12 w-12" />
              <div className="font-bold text-xl">ASIA INFINITY</div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              We specializes in the safe and efficient transport of super heavy and oversized loads. Our team of professionals and advanced equipment ensure that your cargo arrives at its destination in perfect condition.
            </p>
          </div>

          {/* Our Capabilities */}
          <div>
            <h3 className="font-bold text-lg mb-6">Our Capabilities</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Super Heavy Transport</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Oversized Air Cargo</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Heavy Lift & Crane Hire</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Oversized Marine Cargo</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Warehouse & Open Yard Facilities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Customs Clearance & Oga Permit Application</span>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>No. 8-3, Jalan Puteri 4/2, Bandar Puteri, 47100 Puchong, Selangor D.E</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+60173958905" className="hover:text-[#FDB913] transition-colors">+6 017 - 3958 905</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:shipping@asiainfinitysolutions.com" className="hover:text-[#FDB913] transition-colors">shipping@asiainfinitysolutions.com</a>
              </li>
            </ul>

            <Button 
              asChild 
              className="mt-6 bg-transparent border-2 border-[#FDB913] text-[#FDB913] hover:bg-[#FDB913] hover:text-[#001529] transition-colors px-8 py-2 font-semibold"
            >
              <Link to="/contact">CONTACT US</Link>
            </Button>

            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.facebook.com/profile.php?id=100086092939932" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#3b5998] hover:bg-[#3b5998]/80 transition-colors rounded-full p-2.5"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/asia-infinity-solutions/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#0077b5] hover:bg-[#0077b5]/80 transition-colors rounded-full p-2.5"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Asia Infinity Solutions Sdn. Bhd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}