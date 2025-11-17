import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Award, 
  Download, 
  Target, 
  CheckCircle2,
  TrendingUp,
  Clock,
  ShieldCheck,
  Zap,
  UsersRound,
  Scale
} from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function About() {
  const downloads = useQuery(api.downloads.list);

  const handleDownload = () => {
    const companyProfile = downloads?.find(d => d.title === "Company Profile");
    if (companyProfile) {
      // Create a temporary anchor element to trigger download
      const link = document.createElement("a");
      link.href = companyProfile.fileUrl;
      link.download = "Asia-Infinity-Solutions-Corporate-Profile.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("Downloading company profile...");
    } else {
      toast.error("Company profile not available");
    }
  };

  const values = [
    {
      icon: CheckCircle2,
      title: "Customer satisfaction",
      description: "Putting the needs of the customer first and striving to exceed their expectations.",
      color: "from-slate-700 to-slate-900",
      bgColor: "bg-slate-50 dark:bg-slate-900/50"
    },
    {
      icon: ShieldCheck,
      title: "Responsibility",
      description: "Taking ownership of one's actions and being accountable for the impact they have on the company, customers, and the wider community.",
      color: "from-slate-700 to-slate-900",
      bgColor: "bg-slate-50 dark:bg-slate-900/50"
    },
    {
      icon: Zap,
      title: "Efficient",
      description: "A focus on maximizing productivity and minimizing waste in order to deliver the best possible results to customers.",
      color: "from-slate-700 to-slate-900",
      bgColor: "bg-slate-50 dark:bg-slate-900/50"
    },
    {
      icon: UsersRound,
      title: "Teamwork",
      description: "Recognizing the importance of collaboration and fostering a culture of inclusivity and mutual support.",
      color: "from-slate-700 to-slate-900",
      bgColor: "bg-slate-50 dark:bg-slate-900/50"
    },
    {
      icon: Scale,
      title: "Integrity",
      description: "Acting with honesty, transparency, and a commitment to doing what is right, even when it is difficult.",
      color: "from-slate-700 to-slate-900",
      bgColor: "bg-slate-50 dark:bg-slate-900/50"
    }
  ];


  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Countries Served" },
    { number: "99%", label: "Client Satisfaction" }
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
            src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1920" 
            alt="About Us" 
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
            <motion.h1 
              className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              About Asia Infinity
              <br />
              Solutions
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Your trusted partner in heavy lift and specialized cargo logistics
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={handleDownload}
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6 rounded-xl shadow-2xl backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Company Profile
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-xl backdrop-blur-sm bg-transparent hover:bg-white/10 border-white/30 text-white"
                >
                  <Link to="/contact">
                    Get In Touch
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

      {/* Introduction Section */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Decorative accent line */}
              <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 via-orange-500 to-transparent opacity-60" />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-8"
              >
                <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200/50 dark:border-amber-800/50 text-slate-900 dark:text-white font-semibold text-sm shadow-sm backdrop-blur-sm">
                  OUR STORY
                </span>
              </motion.div>

              <motion.h2 
                className="text-5xl md:text-6xl font-black tracking-tight mb-8 text-slate-900 dark:text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Welcome to Asia Infinity Solutions
              </motion.h2>
              
              <div className="space-y-6">
                <motion.p 
                  className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Welcome to <span className="font-bold text-slate-900 dark:text-white bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Asia Infinity Solutions</span>, your one-stop solution for super heavy transport, oversized air and marine cargo, and heavy lift and crane hire. We are a team of experienced professionals who are dedicated to providing top-quality transportation and logistics services to our clients.
                </motion.p>
                <motion.p 
                  className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  In addition to our transport services, we also offer warehouse and open yard facilities for storage and handling of your cargo. Our team is proficient in customs clearance and OGA permit application, ensuring that your cargo is transported smoothly and efficiently.
                </motion.p>
                <motion.p 
                  className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  With Asia Infinity Solutions, you can trust that your heavy and oversized cargo is in capable hands. We are committed to delivering exceptional service and meeting the unique needs of each and every one of our clients.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              {/* Premium image container with multiple layers */}
              <div className="relative h-[600px] md:h-[700px] rounded-3xl overflow-hidden">
                {/* Outer glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main image container */}
                <div className="relative h-full w-full rounded-3xl overflow-hidden bg-slate-900">
                  {/* Premium image - corporate/luxury style */}
                  <motion.img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80" 
                    alt="Asia Infinity Solutions" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  
                  {/* Multi-layer gradient overlays for depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-900/60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30" />
                  
                  {/* Animated shimmer effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                  />
                  
                  {/* Premium border glow */}
                  <div className="absolute inset-0 border-2 border-white/10 rounded-3xl pointer-events-none" />
                  <motion.div
                    className="absolute inset-0 border-2 border-amber-500/30 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(245, 158, 11, 0)',
                        '0 0 40px rgba(245, 158, 11, 0.3)',
                        '0 0 20px rgba(245, 158, 11, 0)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                
                {/* Floating decorative elements */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-8 right-8 w-24 h-24 border-2 border-white/20 rounded-2xl backdrop-blur-sm bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-8 left-8 w-20 h-20 border-2 border-white/20 rounded-full backdrop-blur-sm bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              
              {/* Premium floating card with glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03, rotate: -1 }}
                className="absolute -bottom-8 -left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50 max-w-sm z-10"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                <div className="flex items-center gap-4 mb-3">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg"
                  >
                    <Target className="h-7 w-7 text-white" strokeWidth={2.5} />
                  </motion.div>
                  <div>
                    <motion.div 
                      className="text-3xl font-black text-slate-900 dark:text-white"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                      viewport={{ once: true }}
                    >
                      15+
                    </motion.div>
                    <div className="text-sm font-medium text-slate-600 dark:text-slate-400">Years Experience</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  Delivering excellence in heavy lift logistics with precision and expertise
                </p>
                
                {/* Accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-4 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                />
              </motion.div>

              {/* Additional floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute top-12 -right-12 bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-full w-24 h-24 flex items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-sm z-10"
              >
                <div className="text-center">
                  <div className="text-2xl font-black">500+</div>
                  <div className="text-xs font-semibold">Projects</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-200/20 via-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
          />
        </div>

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.015]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #64748b 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              backgroundPosition: '0 0, 25px 25px'
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
            <motion.h2 
              className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-slate-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              OUR COMPANY CORE VALUES
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              The principles that guide everything we do
            </p>
          </motion.div>

          {/* Values Grid - 2-3 layout matching the image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {/* Row 1: First 2 values - each spans 3 columns on large screens */}
            {values.slice(0, 2).map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="group md:col-span-1 lg:col-span-3"
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className={`relative h-full rounded-xl ${value.bgColor} border border-slate-200 dark:border-slate-800 p-8 cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/[0.02] dark:group-hover:bg-white/[0.02] transition-all duration-300" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-16 h-16 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300"
                  >
                    <value.icon className="h-8 w-8 text-white dark:text-slate-900" strokeWidth={2} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                    {value.description}
                  </p>

                  {/* Accent line on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-slate-900 dark:bg-white group-hover:w-full transition-all duration-500" />
                </motion.div>
              </motion.div>
            ))}

            {/* Row 2: Last 3 values - each spans 2 columns on large screens */}
            {values.slice(2).map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: (index + 2) * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="group md:col-span-1 lg:col-span-2"
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className={`relative h-full rounded-xl ${value.bgColor} border border-slate-200 dark:border-slate-800 p-8 cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/[0.02] dark:group-hover:bg-white/[0.02] transition-all duration-300" />
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-16 h-16 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-shadow duration-300"
                  >
                    <value.icon className="h-8 w-8 text-white dark:text-slate-900" strokeWidth={2} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-slate-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                    {value.description}
                  </p>

                  {/* Accent line on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-slate-900 dark:bg-white group-hover:w-full transition-all duration-500" />
                </motion.div>
              </motion.div>
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
                icon: Clock,
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
                  onClick={handleDownload}
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-xl backdrop-blur-sm bg-transparent hover:bg-white/10 border-white/30 text-white hover:border-white/50"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Company Profile
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
