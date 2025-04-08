# 🎂 Página de Cumpleaños - "Feliz Cumple Nicole" 🐸

Una página web temática para felicitar a mi novia por su cumpleaños. El sitio fue diseñado con un estilo adorable de ranitas e incluye mensaje inicial, carrusel de fotos, carta personalizada y una sección donde se muestran mensajes de felicitaciones conectados a una base de datos.

---

## 🌈 Características

- ✅ Interfaz enfocada exclusivamente para **teléfonos móviles**
- 💌 **Mensaje inicial animado**
- 🖼️ **Carrusel con marco de ranita** totalmente en CSS
- 📜 **Carta personalizada** con diseño de papel decorativo
- 💚 **Sección de felicitaciones** extraídas desde MySQL
- 🐸 **Formulario privado** para que otras personas puedan agregar mensajes
- 🔒 Mensajes gestionados desde una API privada sin autenticación

---

## 🧱 Tecnologías Utilizadas

### Frontend
- **React + Vite**
- **CSS personalizado**
- Estructura modular por componentes
- Animaciones con `@keyframes`

### Backend
- **Node.js + Express**
- Conexión a **MySQL** con `mysql2`
- API pública para obtener comentarios
- API privada para insertar mensajes

### Base de datos
- **MySQL**
  - Tabla: `comentarios`
  - Campos: `id`, `nombre`, `mensaje`, `fecha`, `emoji`
