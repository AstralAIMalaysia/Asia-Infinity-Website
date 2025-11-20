import { api } from "@/convex/_generated/api";
import { useQuery, useMutation } from "convex/react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Loader2, Phone, Clock, MapPin, FileText, Download, TrendingUp, Award, Zap } from "lucide-react";
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
  const updateDescriptionsMutation = useMutation(api.services.updateDescriptions);
  const [isSeeding, setIsSeeding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

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

  const handleUpdateDescriptions = async () => {
    setIsUpdating(true);
    try {
      const result = await updateDescriptionsMutation({});
      if (result?.success) {
        toast.success(result.message || "Service descriptions updated successfully");
      } else {
        toast.error(result?.message || "Failed to update service descriptions. Please try again.");
      }
      // The query will automatically refetch
    } catch (error) {
      console.error("Update error:", error);
      toast.error(`Failed to update service descriptions: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsUpdating(false);
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

  const stats = [
    { number: "7+", label: "Service Categories" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Parallax Effect */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920" 
            alt="Our Services" 
            className="w-full h-full object-cover"
          />
          {/* Advanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/80 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </motion.div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-[1] opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1)), linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))`,
              backgroundSize: '60px 60px',
              backgroundPosition: '0 0, 30px 30px'
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-white relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold">
                OUR SERVICES
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Efficiency On The Move
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Global project logistics and transportation services via sea, land and air.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6 rounded-xl shadow-2xl backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20"
                >
                  <Link to="/contact">
                    Get Detailed Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-xl backdrop-blur-sm bg-transparent hover:bg-white/10 border-white/30 text-white"
                >
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 md:py-24 bg-slate-900 text-white overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group"
              >
                <div className="relative h-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 text-center hover:bg-white/15 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl">
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div 
                    className="text-4xl md:text-6xl font-black mb-3 text-white relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm md:text-base font-medium opacity-90 relative z-10">
                    {stat.label}
                  </div>
                  
                  {/* Decorative line */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:w-3/4 transition-all duration-500"
                    initial={false}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Bar */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-sm py-8 md:py-10 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Call Center */}
            <motion.div 
              className="flex items-center space-x-4 group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="bg-white/10 p-3 rounded-xl group-hover:bg-white/20 transition-all duration-300"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <Phone className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm font-semibold text-white/90 uppercase tracking-wider">CALL CENTER</p>
                <p className="text-xs text-gray-300 mb-1">Give us a free call</p>
                <a href="tel:+60173958905" className="text-base font-bold text-white hover:text-primary transition-colors">
                  +60 17-395 8905
                </a>
              </div>
            </motion.div>

            {/* Working Hours */}
            <motion.div 
              className="flex items-center space-x-4 group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="bg-white/10 p-3 rounded-xl group-hover:bg-white/20 transition-all duration-300"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <Clock className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm font-semibold text-white/90 uppercase tracking-wider">WORKING HOURS</p>
                <p className="text-xs text-gray-300">Mon-Fri 9AM-6PM</p>
                <p className="text-xs text-gray-300">Sat & Sun 9AM-6PM</p>
              </div>
            </motion.div>

            {/* Our Location */}
            <motion.div 
              className="flex items-center space-x-4 group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="bg-white/10 p-3 rounded-xl group-hover:bg-white/20 transition-all duration-300"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <MapPin className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm font-semibold text-white/90 uppercase tracking-wider">OUR LOCATION</p>
                <p className="text-xs text-gray-300">Puchong</p>
                <p className="text-xs text-gray-300">Selangor, Malaysia</p>
              </div>
            </motion.div>

            {/* Get Detailed Quote */}
            <motion.div 
              className="flex items-center space-x-4 group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="bg-white/10 p-3 rounded-xl group-hover:bg-white/20 transition-all duration-300"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <FileText className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <p className="text-sm font-semibold text-white/90 uppercase tracking-wider">GET DETAILED QUOTE</p>
                <Button asChild variant="ghost" className="p-0 h-auto text-white hover:text-primary hover:bg-transparent mt-1">
                  <Link to="/contact" className="text-sm font-bold flex items-center">
                    Contact Us
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
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
            className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-amber-200/20 via-orange-200/10 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-blue-200/20 via-indigo-200/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200/50 dark:border-amber-800/50 text-slate-900 dark:text-white font-semibold text-sm shadow-sm backdrop-blur-sm">
                WHAT WE CAN DO
              </span>
            </motion.div>
            <motion.h2 
              className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-slate-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Capabilities
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Comprehensive logistics solutions tailored to your unique requirements
            </p>
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

      {/* Why Choose Us Section */}
      <section className="relative py-32 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
        {/* Premium animated background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-emerald-200/15 via-teal-200/15 to-cyan-200/15 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-l from-violet-200/15 via-purple-200/15 to-fuchsia-200/15 rounded-full blur-3xl"
          />
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.05) 75%), linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.05) 75%)`,
              backgroundSize: '60px 60px',
              backgroundPosition: '0 0, 30px 30px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-slate-900 dark:text-white font-semibold text-sm">
                WHY CHOOSE US
              </span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-slate-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Experience the Asia Infinity difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: "Industry Expertise",
                description: "Over 15 years of specialized experience in heavy lift and project cargo logistics, serving diverse industries worldwide.",
                bgColor: "bg-white dark:bg-slate-800"
              },
              {
                icon: TrendingUp,
                title: "Advanced Solutions",
                description: "State-of-the-art equipment and innovative logistics solutions tailored to your specific project requirements.",
                bgColor: "bg-white dark:bg-slate-800"
              },
              {
                icon: Zap,
                title: "24/7 Support",
                description: "Round-the-clock project management and customer support to ensure seamless operations at every stage.",
                bgColor: "bg-white dark:bg-slate-800"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className={`relative h-full rounded-xl ${item.bgColor} border border-slate-200 dark:border-slate-700 p-8 cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/[0.01] dark:group-hover:bg-white/[0.01] transition-all duration-300" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-14 h-14 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300"
                  >
                    <item.icon className="h-7 w-7 text-white dark:text-slate-900" strokeWidth={2} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                    {item.description}
                  </p>

                  {/* Accent line on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-slate-900 dark:bg-white group-hover:w-full transition-all duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden py-24">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1920" 
            alt="Contact" 
            className="w-full h-full object-cover"
          />
          {/* Advanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-[1] opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1)), linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))`,
              backgroundSize: '50px 50px',
              backgroundPosition: '0 0, 25px 25px'
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-[1] overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/10 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-white/10 rounded-lg"
          />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium">
                GET STARTED TODAY
              </span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Ready to Move Your
              <br />
              Business Forward?
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Let's discuss how we can help with your next heavy lift or specialized cargo project.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6 rounded-xl shadow-2xl backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white"
                >
                  <Link to="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-xl backdrop-blur-sm bg-transparent hover:bg-white/10 border-white/30 text-white hover:border-white/50"
                >
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
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