import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  index: number;
}

export default function ServiceCard({ title, description, imageUrl, slug, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card className="overflow-hidden h-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:shadow-xl transition-all duration-300 cursor-pointer relative">
          {/* Hover glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/0 via-orange-500/0 to-amber-500/0 group-hover:from-amber-500/20 group-hover:via-orange-500/20 group-hover:to-amber-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          <div className="relative h-56 md:h-64 overflow-hidden">
            <motion.img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            {/* Enhanced gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent" />
            
            {/* Shimmer effect on hover */}
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
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
            />
          </div>
          
          <CardContent className="p-6 md:p-8 relative">
            <motion.h3 
              className="text-2xl font-black mb-3 tracking-tight text-slate-900 dark:text-white"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.h3>
            <p className="text-muted-foreground text-base mb-6 leading-relaxed line-clamp-3">
              {description}
            </p>
            
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                asChild 
                variant="ghost" 
                className="p-0 h-auto hover:bg-transparent group/btn"
              >
                <Link 
                  to={`/services/${slug}`} 
                  className="flex items-center font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
                >
                  FIND OUT MORE
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:text-primary transition-colors" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
            
            {/* Accent line on hover */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
