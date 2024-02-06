import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from "../../json/posts.json";
import PostModelo from "../../Componentes/PostModelo";
import NaoEncontrada from "../NaoEncontrada";
import "./Post.css";
import PaginaPadrao from "../../Componentes/PaginaPadrao";
export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  return (
    <PaginaPadrao>
      <PostModelo
        FotoCapa={`../../assets/posts/${post.id}/capa.png`}
        título={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
      </PostModelo>
    </PaginaPadrao>
  );
}
