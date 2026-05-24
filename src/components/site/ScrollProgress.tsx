import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed left-0 right-0 top-0 z-50 h-[2px] bg-gradient-to-r from-[oklch(0.7_0.22_260)] via-[oklch(0.65_0.27_305)] to-[oklch(0.85_0.16_200)]"
    />
  );
}
