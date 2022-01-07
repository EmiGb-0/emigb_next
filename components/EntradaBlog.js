import Link from 'next/link'
import Image from 'next/image'
import { formatearFecha } from '../helpers'
import styles from '../styles/EntradaBlog.module.css'

const EntradaBlog = ({entrada}) => {

    const {titulo, resumen, imagen, published_at, url, categoria} = entrada

    return (
        <article>

            <Image layout='responsive' width={800} height={600} src={imagen.url} alt={`Imagen Blog ${titulo}`}/>
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(published_at)}</p>
                <a className={styles.categoria}>{categoria}</a>

                <p className={styles.resumen}>{resumen}</p>
                
                

                <Link href={`/blog/${url}`}>
                    <a className={styles.enlace}>Leer Mas</a>
                </Link>
            </div>
        </article>
    )
}

export default EntradaBlog
