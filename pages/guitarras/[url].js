import {useState} from 'react'
import styles from "../../styles/guitarras.module.css";
import Image from "next/image";
import Layout from "../../components/layout";
const Producto = ({ guitarra, agregarCarrito }) => {
  const [cantidad, setCantidad] = useState(0)
  const { name, descripcion, images, precio } = guitarra[0].attributes;

  const handleSubmit = e => {
    e.preventDefault()
    if (cantidad < 1 ){
      alert('Cantidad no válida')
      return
    }

    const guitarraSeleccionada = {
      id : guitarra[0].id,
      imagen: images.data.attributes.url,
      nombre: name,
      precio,
      cantidad
    }
    
    agregarCarrito(guitarraSeleccionada)

  }
  return (
    <Layout name={`Guitarra - ${name}`}>
      <div>
        <div className={styles.guitarra}>
          <Image
            src={images.data.attributes.formats.medium.url}
            width={600}
            height={400}
            alt={`Imagen guitarra ${name}`}
          />
          <div className={styles.contenido}>
            <h2>{name}</h2>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>$ {precio}</p>
          <form className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">
              Cantidad
            </label>
            <select id="cantidad"
            onChange={e => setCantidad(Number(e.target.value))}
            >
              <option value="0">--Seleccione</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" value="Agregar al Carrito" />
          </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Producto;

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API}/guitarras`);
  const { data: guitarra } = await respuesta.json();

  const paths = guitarra?.map((guitarra) => ({
    params: {
      url: guitarra.attributes.url,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API}/guitarras?filters[url]=${url}&populate=images`
  );
  const { data: guitarra } = await respuesta.json();

  return {
    props: {
      guitarra,
    },
  };
}

// export async function getServerSideProps({query: {url}}){
//     const respuesta = await fetch(`${process.env.API}/filters[url]=${url}&populate=imagen`);
//     const {data:guitarra} = await respuesta.json()

//     return {
//         props:{
//             guitarra
//         }
//     }
// }
