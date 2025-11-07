import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, ChevronDown, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();
  const services = useQuery(api.services.list);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
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

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.svg" alt="Asia Infinity Solutions" className="h-12 w-12" />
            <div className="hidden md:block">
              <div className="text-lg font-bold tracking-tight">ASIA INFINITY SOLUTIONS</div>
              <div className="text-xs text-muted-foreground">Efficiency On The Move</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                to="/services"
                className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
              >
                Our Services
                <ChevronDown className="h-4 w-4" />
              </Link>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[350px] bg-background border rounded-lg shadow-lg p-2">
                  {services?.map((service) => (
                    <Link
                      key={service._id}
                      to={`/services/${service.slug}`}
                      className="block px-4 py-3 rounded-md hover:bg-accent transition-colors"
                    >
                      <div className="font-medium text-sm">{service.title}</div>
                      <div className="text-xs text-muted-foreground line-clamp-1 mt-1">
                        {service.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="mr-2"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button asChild size="sm">
              <Link to="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Get Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services Section */}
                <div className="border-t pt-4">
                  <Link
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-medium py-2 mb-2"
                  >
                    Our Services
                  </Link>
                  <div className="pl-4 space-y-2">
                    {services?.map((service) => (
                      <Link
                        key={service._id}
                        to={`/services/${service.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm py-2 hover:text-primary"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={toggleDarkMode}
                  className="w-full mb-4"
                >
                  {isDark ? (
                    <>
                      <Sun className="mr-2 h-4 w-4" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="mr-2 h-4 w-4" />
                      Dark Mode
                    </>
                  )}
                </Button>

                <Button asChild className="w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Phone className="mr-2 h-4 w-4" />
                    Get Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}