import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const cards = [
    {
      title: "UI/UX design",
      id: 1,
    },
    {
      title: "Wireframe design",
      id: 2,
    },
    {
      title: "Fron-end develoment",
      id: 3,
    },
    {
      title: "Back-end develoment",
      id: 4,
    },
    {
      title: "Title 5",
      id: 5,
    },
    {
      title: "Title 6",
      id: 6,
    },
    {
      title: "Title 7",
      id: 7,
    },
  ];

const Example = () => {
  return (
      <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-84%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh]">
      <div className="sticky flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id} className="group relative h-[200px] w-[400px] overflow-hidden bg-neutral-200">
      <div className="absolute inset-0 z-10 h-full text-center grid place-content-center">
        <p className="bg-gradient-to-br to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

