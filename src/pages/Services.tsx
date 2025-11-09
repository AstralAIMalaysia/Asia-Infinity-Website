import { api } from "@/convex/_generated/api";
import { useQuery, useMutation } from "convex/react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Loader2, Phone, Clock, MapPin, FileText } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { useState } from "react";
import { toast } from "sonner";

export default function Services() {
  const services = useQuery(api.services.list);
  const seedMutation = useMutation(api.seedData.seed);
  const [isSeeding, setIsSeeding] = useState(false);

  const handleSeed = async () => {
    setIsSeeding(true);
    try {
      const result = await seedMutation({});
      toast.success(result.message || "Database seeded successfully");
      // The query will automatically refetch
    } catch (error) {
      toast.error("Failed to seed database. Please try again.");
    } finally {
      setIsSeeding(false);
    }
  };


  // Loading state
  if (services === undefined) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Loading services...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Empty state - no services found
  if (services === null || services.length === 0) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <Database className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-4xl font-bold mb-4">No Services Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              The database appears to be empty. Would you like to seed it with sample data?
            </p>
            <Button
              onClick={handleSeed}
              disabled={isSeeding}
              size="lg"
              className="text-lg"
            >
              {isSeeding ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Seeding Database...
                </>
              ) : (
                <>
                  <Database className="mr-2 h-5 w-5" />
                  Seed Database
                </>
              )}
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              This will add 7 services, 7 industries, and 1 downloadable asset to your database.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="container mx-auto px-4 z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Efficiency On The Move
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Global project logistics and transportation services via sea, land and air.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <Link to="/services">
                  Our Service
                </Link>
              </Button>
              <Button asChild size="lg" className="text-lg">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Bar */}
      <section className="bg-primary/90 backdrop-blur-sm py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
            {/* Call Center */}
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-lg">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">CALL CENTER</p>
                <p className="text-xs text-gray-200">Give us a free call</p>
                <a href="tel:+60173958905" className="text-sm font-semibold hover:underline">
                  +60 17-395 8905
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-lg">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">WORKING HOURS</p>
                <p className="text-xs text-gray-200">Mon-Fri 9AM-6PM</p>
                <p className="text-xs text-gray-200">Sat & Sun 9AM-6PM</p>
              </div>
            </div>

            {/* Our Location */}
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-lg">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">OUR LOCATION</p>
                <p className="text-xs text-gray-200">Puchong</p>
                <p className="text-xs text-gray-200">Selangor, Malaysia</p>
              </div>
            </div>

            {/* Get Detailed Quote */}
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 p-2 rounded-lg">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">GET DETAILED QUOTE</p>
                <Button asChild variant="ghost" className="p-0 h-auto text-white hover:text-white/80 hover:bg-transparent">
                  <Link to="/contact" className="text-sm font-semibold">
                    Contact Us →
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              What We Can Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Our Capabilities
            </h2>
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
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your heavy lift and specialized cargo requirements
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/contact">
                Request a Quote
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