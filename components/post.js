import styles from "../styles/blog.module.css";
import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../utils/helpers";

const Post = ({ post }) => {
  const { attributes } = post;
  return (
    <article>
      <Image
        src={attributes.imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen blog ${attributes.titulo}`}
      />
      <div className={styles.contenido}>
        <h3>{attributes.titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(attributes.publishedAt)}</p>
        <p className={styles.resumen}>{attributes.contenido}</p>
        <Link className={styles.enlace} href={`/blog/${attributes.url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
};

export default Post;
