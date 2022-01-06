import Link from "next/link"
import Layout from "../components/Layout"
import styles from "../styles/NoEncontrado.module.css"

const InternalServerError = () => {
    return (
        <Layout>
            <div className={styles.no_encontrado}>
                <i className="fas fa-exclamation-triangle"></i>
                <h1 className="heading">¡Hubo un error!</h1>
                <p>El link no existe o ha expirado</p>

                <Link href='/'>Volver al inicio</Link>
            </div>
        </Layout>
    )
}

export default InternalServerError
