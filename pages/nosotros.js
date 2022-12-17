import Image from 'next/image'
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css"

const Nosotros = () => {
  return (
    <Layout title="Nosotros" description={"lorem ipsum"}>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800}  alt="Imagen sobre nosotros"/>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
              vitae congue mauris rhoncus. Mauris sit amet massa vitae tortor
              condimentum. Sed vulputate mi sit amet mauris commodo quis
              imperdiet. Dignissim cras tincidunt lobortis feugiat vivamus at
              augue eget. Ultricies tristique nulla aliquet enim tortor at
              auctor urna. 
            </p>

            <p>
              Ut enim blandit volutpat maecenas volutpat blandit aliquam. Quam
              lacus suspendisse faucibus interdum posuere lorem. Augue eget arcu
              dictum varius duis. Ipsum consequat nisl vel pretium lectus.
              Pretium quam vulputate dignissim suspendisse in est. Amet
              facilisis magna etiam tempor. 
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
