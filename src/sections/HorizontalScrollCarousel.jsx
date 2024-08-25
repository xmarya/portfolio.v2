import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { offers } from "../data/offersData";


export default function HorizontalScrollCarousel () {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[200svh]">
      <div className="flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {offers.map((offer) => {
            return <Service offer={offer} key={offer.name} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Service = ({ offer }) => {
  return (
    <div className="h-[200px] w-[400px] overflow-hidden">
      <div className="h-full text-center flex items-center justify-cente">
        <p className="p-8 text-6xl font-black uppercase  text-[var(--neon-purple)]">
          {offer.title}
        </p>
      </div>
    </div>
  );
};


