import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../assets/styles/global.css";

const Letter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref}
      className="letter-container"
      initial={{ scaleY: 0, opacity: 0 }}
      animate={inView ? { scaleY: 1, opacity: 1 } : {}}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.div 
        className="letter-paper"
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="letter-title">Para la mujer mas hermosa</h2>
        <p className="letter-text">
          Cariño mio, cada día a tu lado es un regalo a mi vida. 
          Quiero que esta página sea un pequeño detalle que te haga sonreír,
          como tu me has hecho sonreir desde el momento que te conoci
        </p>
        <p className="letter-text">
          Gracias por cada risa, cada abrazo y cada momento juntos.
          Tengo tantos sueños que quiero cumplir junto a ti, en esta vida y las que falten
        </p>
        <p className="letter-signature">De: kalid❤️</p>
      </motion.div>
    </motion.div>
  );
};

export default Letter;