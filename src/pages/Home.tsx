import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import InteractiveSelector from "@/components/ui/interactive-selector";

export default function Home() {
  const services = useQuery(api.services.list);
  const industries = useQuery(api.industries.list);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section - What We Can Do */}
      <section className="pt-4 pb-20 bg-background">
        {services && services.length > 0 ? (
          <InteractiveSelector 
            services={services}
            title="What We Can Do"
            subtitle="Our Capabilities"
          />
        ) : (
          <div className="container mx-auto px-4">
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading services...</p>
            </div>
          </div>
        )}
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

      {/* CTA Section - Let's Talk */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-200/15 via-teal-200/15 to-cyan-200/15 dark:from-emerald-500/10 dark:via-teal-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-violet-200/15 via-purple-200/15 to-fuchsia-200/15 dark:from-violet-500/10 dark:via-purple-500/10 dark:to-fuchsia-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-200/10 via-indigo-200/10 to-purple-200/10 dark:from-blue-500/8 dark:via-indigo-500/8 dark:to-purple-500/8 rounded-full blur-3xl"
          />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.01]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.05) 75%), linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.05) 75%)`,
              backgroundSize: '60px 60px',
              backgroundPosition: '0 0, 30px 30px'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="inline-block mb-8"
            >
              <span className="px-5 py-2.5 rounded-full bg-primary/10 dark:bg-primary/20 backdrop-blur-md border border-primary/20 dark:border-primary/30 text-sm font-medium tracking-wide text-foreground hover:bg-primary/15 dark:hover:bg-primary/25 transition-all duration-300 cursor-default">
                GET IN TOUCH
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Let's Talk
            </motion.h2>
            
            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-muted-foreground font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Our expert support team will answer all your questions and help you get started.
            </motion.p>
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="group relative px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-primary/20 transition-all duration-300 overflow-hidden"
                >
                  <Link to="/contact" className="relative z-10 flex items-center">
                    <span>Contact Us</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
