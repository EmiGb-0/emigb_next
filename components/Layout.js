import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina}) => {
    return (
        <div>
            <Head>
                <title>EmiGb - {pagina}</title>
                <meta name="description" content="Portafolio de EmiGb y cotizaciones de proyectos" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Head>

            <Header />

            {children}

            <Footer />

        </div>
    )
}

export default Layout
