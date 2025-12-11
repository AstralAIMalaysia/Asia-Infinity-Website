import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Lenis from "lenis";

interface IndustryCardProps {
  name: string;
  imageUrl: string;
  index: number;
}

export default function IndustryCard({ name, imageUrl, index }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
        <div className="relative h-40 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-bold text-sm text-center">{name}</h3>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
