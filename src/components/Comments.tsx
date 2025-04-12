import { useEffect, useState } from "react";
import "../assets/styles/global.css";

interface Comment {
  id: number;
  nombre: string;
  mensaje: string;
  emoji: string;
  fecha: string;
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [expandedComments, setExpandedComments] = useState<Set<number>>(new Set());

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/comentarios`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error al obtener comentarios:", error));
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedComments((prev) => {
      const newExpandedComments = new Set(prev);
      if (newExpandedComments.has(id)) {
        newExpandedComments.delete(id);
      } else {
        newExpandedComments.add(id);
      }
      return newExpandedComments;
    });
  };

  return (  
    <div className="comments-section">
      <h2 className="comments-title">💌 Mensajes de Felicitaciones 💌</h2>
      <div className="comments-grid">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <div className="comment-header">
                <span className="comment-name">{comment.nombre}</span>
              </div>
              <p
                className={`comment-text ${expandedComments.has(comment.id) ? "expanded" : "collapsed"}`}
              >
                {comment.mensaje}
              </p>
              <button className="expand-button" onClick={() => toggleExpand(comment.id)}>
                {expandedComments.has(comment.id) ? "Ver menos" : "Ver más"}
              </button>
              <p className="comment-date">{new Date(comment.fecha).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p className="no-comments"></p>
        )}
      </div>
    </div>
  );
};

export default Comments;