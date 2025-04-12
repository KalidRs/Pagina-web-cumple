import { motion } from "framer-motion";
import "../assets/styles/global.css";

const Message = () => {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const target = document.getElementById("carousel");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="message-container">
      {/* 🐸 Tarjeta con el mensaje */}
      <motion.div
        className="message-box"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* 💖 Imagen de ranita */}
        <motion.img
          src="/images/corazon.png"
          alt="Ranita feliz"
          className="corazon-img"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1 className="message-title">
          Feliz Cumpleaños Bonita
        </motion.h1>

        <motion.p className="message-subtitle">
          Hoy celebramos el día en que el mundo se volvió un poquito más bonito, porque tú llegaste.
          No hay palabras suficientes para agradecer que estés en mi vida.
          Esta página es solo una forma de decirte que cada día contigo es un regalo,
          y que no hay lugar en el que prefiera estar que a tu lado.
        </motion.p>

        <motion.a href="#carousel" className="message-button" onClick={handleScroll}>
          Nuestras Fotos
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Message;
