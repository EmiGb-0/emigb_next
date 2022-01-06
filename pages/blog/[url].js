import Image from "next/image"
import Layout from "../../components/Layout"
import { formatearFecha } from '../../helpers'
import styles from '../../styles/EntradaBlog.module.css'
import ReactMarkdown from "react-markdown"

const Articulo = ({articulo}) => {

    const {titulo, contenido, imagen, published_at} = articulo[0]

    return (
        <Layout
            pagina={titulo}
        >
            <main className='contenedor'>
                <h1 className="heading">{titulo}</h1>

                <article className={styles.entrada}>
                    <Image layout="responsive" width={800} height={600} src={imagen.url} alt={`Imagen entrada ${titulo}`} />

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                        <ReactMarkdown className={styles.texto}>{contenido}</ReactMarkdown>
                    </div>
                </article>
            </main>
        </Layout>
    )
}

export async function getServerSideProps({query: {url}}) {
    
    const urlArticulo = `${process.env.API_URL}/blogs?url=${url}`
    const respuesta = await fetch(urlArticulo)
    const articulo = await respuesta.json()

    return {
        props: {
            articulo
        }
    }
}

export default Articulo
