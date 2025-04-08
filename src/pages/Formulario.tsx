import { useState } from "react";
import "../assets/styles/global.css";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/comentarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, mensaje }),
      });

      if (res.ok) {
        setEnviado(true);
        setNombre("");
        setMensaje("");

        // Oculta el modal después de 4 segundos
        setTimeout(() => {
          setEnviado(false);
        }, 4000);
      }
    } catch (error) {
      console.error("Error al enviar:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>💌 Escribe tu mensaje de cumpleaños</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <textarea
          placeholder="Tu mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
        <button type="submit">Enviar mensaje</button>
      </form>

      {/* ✅ Solo el modal de confirmación */}
      {enviado && (
        <div className="modal-overlay">
          <div className="modal-popup">
            <h3>🎉 ¡Mensaje enviado!</h3>
            <p>Gracias por tu felicitación 💖</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formulario;
