import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const services = useQuery(api.services.list);
  
  // Only apply transparent navbar on home page
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Determine if navbar should be transparent
  const isTransparent = isHomePage && !isScrolled;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isTransparent
          ? "border-b-transparent bg-gradient-to-b from-black/30 via-black/20 to-transparent backdrop-blur-sm"
          : "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
      }`}
    >
      <div className="mx-auto px-6 max-w-7xl">
        <div className="flex h-24 items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 flex-shrink-0">
            <img src="/logo.svg" alt="Asia Infinity" className="h-16 w-16" />
            <div className="hidden md:block">
              <div className={`text-xl font-black tracking-wide transition-colors ${
                isTransparent ? "text-white drop-shadow-lg" : ""
              }`} style={{ fontWeight: 900 }}>ASIA INFINITY</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 flex-1 justify-end">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-bold transition-colors hover:text-primary px-5 py-2.5 rounded-md ${
                  location.pathname === item.path 
                    ? "text-primary" 
                    : isTransparent
                      ? "text-white drop-shadow-lg" 
                      : "text-foreground"
                }`}
                style={{ fontWeight: 700 }}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown with Animation */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`text-base font-bold transition-colors hover:text-primary flex items-center gap-1.5 px-5 py-2.5 rounded-md ${
                  isTransparent ? "text-white drop-shadow-lg" : ""
                }`}
                style={{ fontWeight: 700 }}
              >
                Our Services
                <ChevronDown className="h-5 w-5" />
              </Link>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 10 }}
                    transition={transition}
                    className="absolute top-full left-0 mt-2 w-[350px] bg-background border rounded-lg shadow-xl overflow-hidden"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="p-2"
                    >
                      {services?.map((service) => (
                        <Link
                          key={service._id}
                          to={`/services/${service.slug}`}
                          className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                        >
                          <div className="font-bold text-base" style={{ fontWeight: 700 }}>{service.title}</div>
                          <div className="text-sm text-muted-foreground line-clamp-1 mt-1 font-medium">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className={`transition-colors ml-3 h-11 w-11 ${
                isTransparent ? "text-white hover:text-white/80 hover:bg-white/10" : ""
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>

            <Button 
              asChild 
              size="default"
              className={`font-bold ml-3 px-6 h-11 text-base ${isTransparent ? "shadow-lg" : ""}`}
              style={{ fontWeight: 700 }}
            >
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={(open) => {
            setIsOpen(open);
            if (!open) {
              setIsMobileServicesOpen(false);
            }
          }}>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                className={`transition-colors h-11 w-11 ${
                  isTransparent ? "text-white hover:text-white/80 hover:bg-white/10" : ""
                }`}
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex-1 px-6 pt-8 pb-6">
                  {/* Main Navigation Links */}
                  <div className="flex flex-col space-y-6">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block text-xl font-bold py-2 text-foreground hover:text-primary transition-colors"
                        style={{ fontWeight: 700 }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Mobile Services Section */}
                  <div className="border-t border-border mt-6 pt-6">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-between w-full text-xl font-bold py-2 mb-4 text-foreground hover:text-primary transition-colors"
                      style={{ fontWeight: 700 }}
                    >
                      <span>Our Services</span>
                      <motion.div
                        animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 space-y-3 pb-2">
                            {services?.map((service) => (
                              <Link
                                key={service._id}
                                to={`/services/${service.slug}`}
                                onClick={() => {
                                  setIsOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                                className="block text-base font-semibold py-2 text-foreground hover:text-primary transition-colors"
                                style={{ fontWeight: 600 }}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Bottom Buttons Section */}
                <div className="px-6 pb-6 pt-4 border-t border-border space-y-3">
                  <Button
                    variant="outline"
                    onClick={toggleDarkMode}
                    className="w-full h-12 text-base font-bold rounded-lg"
                    style={{ fontWeight: 700 }}
                  >
                    {isDark ? (
                      <>
                        <Sun className="mr-2 h-5 w-5" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="mr-2 h-5 w-5" />
                        Dark Mode
                      </>
                    )}
                  </Button>

                  <Button asChild className="w-full h-12 text-base font-bold rounded-lg" style={{ fontWeight: 700 }}>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      <Phone className="mr-2 h-5 w-5" />
                      Get Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}