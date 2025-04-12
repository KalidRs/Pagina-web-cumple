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
        <h2 className="letter-title">Para la mujer más hermosa</h2>
        <p className="letter-text">
          No hay palabras que le hagan justicia a todo lo que eres.
          Eres la calma que abraza, la alegría que contagia, la ternura que llena todo.
          Desde que llegaste, el mundo tiene más luz, más razones, más amor.
        </p>
        <p className="letter-text">
          Esta carta es apenas un suspiro de todo lo que siento por ti.
          Porque contigo aprendí que el amor verdadero no es perfecto,
          pero sí es real, paciente, y siempre encuentra su manera de abrazar sin soltar.
          Quiero estar a tu lado hoy, mañana y en cada uno de mis sueños.
        </p>

        <p className="letter-signature">Siempre tuyo, Kalid 💖</p>
        </motion.div>
    </motion.div>
  );
};

export default Letter;