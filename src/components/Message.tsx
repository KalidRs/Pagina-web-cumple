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
      {/* 🎈 Burbujas decorativas */}
      <div className="bubbles">
        {[...Array(10)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

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
        Hoy realmente es un dia muy importante y no solo para ti, si no a todos los que te amamos 
        y por ello te hice esta pequeña pagina para recordarte que contigo quiero estar y que contigo quiero todo lo que un hombre
        puede pedir, el ser una familia de 2
        </motion.p>

        <motion.a href="#carousel" className="message-button" onClick={handleScroll}>
          Nuestras pequeña historia
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Message;