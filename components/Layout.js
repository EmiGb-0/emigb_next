import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina}) => {
    return (
        <div>
            <Head>
                <title>EmiGb - {pagina}</title>
                <meta name="description" content="Portafolio de EmiGb - Developer web FullStack" />
                <meta name="keywords" content="emigb, portfolio, portafolio, desarrollo, web, developer, blog"/>
                <meta name="author" content="EmiGb" />
                <meta name="copyright" content="EmiGb" />
                <meta name="theme-color" content="#0C0C0C" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            </Head>

            <Header />

            {children}

            <Footer />

        </div>
    )
}

export default Layout
