import Head from "next/head"
import Footer from "./footer"
import Header from "./header"

const Layout = ({children, title, description}) => {
  return (
    <div>
        <Head>
            <meta name="description" content={description}/>
            <title>{`Guitar LA - ${title}`}</title>
        </Head>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout