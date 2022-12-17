import Image from "next/image"
import Link from "next/link"
import styles from "../styles/guitarras.module.css"
const Guitarra = ({guitarra}) => {
  const {name, images, descripcion , precio, url} = guitarra
  console.log(guitarra)
  return (
    <div className={styles.guitarra}>
      <Image src={images.data.attributes.formats.medium.url} width={600} height={400}alt={`Imagen guitarra `}/>
      <div className={styles.contenido}>
        <h2>{name}</h2>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>$ {precio}</p>
        <Link className={styles.enlace} href={`/guitarras/${url}`}>
        Ver Producto
        </Link>
      </div>

    </div>
  )
}

export default Guitarra