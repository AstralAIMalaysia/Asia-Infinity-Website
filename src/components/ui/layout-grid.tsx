import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: React.ReactElement | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleHover = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleLeave = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div 
      className="w-full p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative"
      onMouseLeave={handleLeave}
    >
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onMouseEnter={() => handleHover(card)}
            className={cn(
              "relative overflow-hidden cursor-pointer rounded-xl h-full w-full min-h-[300px] bg-white dark:bg-neutral-900"
            )}
            style={{
              zIndex: selected?.id === card.id ? 50 : 10,
            }}
            animate={{
              scale: selected?.id === card.id ? 1.25 : 1,
              y: selected?.id === card.id ? -40 : 0,
              opacity: selected?.id && selected?.id !== card.id ? 0.3 : 1,
              filter: selected?.id === card.id ? "brightness(1.25) saturate(1.1)" : "brightness(1)",
              boxShadow: selected?.id === card.id 
                ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)" 
                : "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            }}
            transition={{
              duration: 0.35,
              ease: [0.34, 1.56, 0.64, 1],
              scale: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
          >
            <ImageComponent card={card} />
            {selected?.id === card.id && <SelectedCard selected={selected} />}
          </motion.div>
        </div>
      ))}
      <motion.div
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10 pointer-events-none",
        )}
        animate={{ opacity: selected?.id ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <img
      src={card.thumbnail}
      className={cn(
        "object-cover object-center absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="absolute inset-0 h-full w-full flex flex-col justify-end rounded-lg z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/20 to-transparent"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="relative px-8 pb-8 z-10"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

