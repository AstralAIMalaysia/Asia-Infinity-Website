import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const services = useQuery(api.services.list);
  const industries = useQuery(api.industries.list);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920" 
            alt="Heavy Transport" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Efficiency On The Move
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Global turnkey logistics and transportation services via sea, land and air.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/contact">
                  Get Detailed Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Link to="/services/super-heavy-transport">
                  Our Services
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Quick Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white text-sm">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">Call Center:</span>
                <a href="tel:+60173958905" className="hover:underline">+60 17-395 8905</a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="font-medium">Mon-Sun:</span>
                <span>9AM - 6PM</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Puchong, Selangor, Malaysia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">What We Can Do</h2>
            <p className="text-xl text-muted-foreground">Our Capabilities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services?.map((service, index) => (
              <ServiceCard
                key={service._id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                slug={service.slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">Industries That We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our expert freight shipping team have experience moving freight for virtually every industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries?.map((industry, index) => (
              <IndustryCard
                key={industry._id}
                name={industry.name}
                imageUrl={industry.imageUrl}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1920" 
            alt="Contact" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">Let's Talk.</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our expert support team will answer all your questions.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
