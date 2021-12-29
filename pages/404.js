import Link from "next/link"
import Layout from "../components/Layout"
import styles from "../styles/NoEncontrado.module.css"

const NoEncontrado = () => {
    return (
        <Layout>
            <div className={styles.no_encontrado}>
                <i className="fas fa-exclamation-triangle"></i>
                <h1 className="heading">Parece que te has perdido</h1>

                <Link href='/'>Volver al inicio</Link>
            </div>
        </Layout>
    )
}

export default NoEncontrado
