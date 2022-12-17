import Layout from "../../components/layout";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/blog.module.css";
import { formatearFecha } from "../../utils/helpers";

const Post = ({ data }) => {
  const {attributes} = data[0]
  return (
    <div>
      <Layout title={attributes.titulo}>
        <article className={`${styles.post} ${styles["mt-3"]}`}>
          <Image
            src={attributes.imagen.data.attributes.url}
            width={1000}
            height={400}
            alt={`Imagen blog ${attributes.titulo}`}
          />
          <div className={styles.contenido}>
            <h3>{attributes.titulo}</h3>
            <p className={styles.fecha}>
              {formatearFecha(attributes.publishedAt)}
            </p>
            <p className={styles.texto}>{attributes.contenido}</p>
     
          </div>
        </article>
      </Layout>
    </div>
  );
};

export default Post;

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API}/posts?filters[url]=${url}&populate=imagen`
  );
  const { data } = await respuesta.json();
  return {
    props: {
      data:data,
    },
  };
}
