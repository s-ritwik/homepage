import { motion } from "framer-motion";

export default function Hero({ title, subtitle, image, children, marqueeImages = [] }) {
  return (
    <section className={`hero ${marqueeImages.length ? "hero-marquee" : ""}`}>
      {marqueeImages.length ? (
        <div className="marquee-bg" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeImages, ...marqueeImages].map((src, index) => (
              <img key={`${src}-${index}`} src={src} alt="" />
            ))}
          </div>
        </div>
      ) : (
        <div className="hero-bg" style={{ backgroundImage: `url(${image})` }} />
      )}
      <div className="hero-overlay" />
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {children}
      </motion.div>
    </section>
  );
}
