import Link from "next/link"
import Layout from "../components/layout"
const Pagina404 = () => {
  return (
    <Layout
    title="Pagina no encontrada"
    >
      <p className="error">Pagina no encontrada</p>
      <Link className="error-enlace" href="/">
            Ir a inicio
      </Link>
    </Layout>
  )
}

export default Pagina404