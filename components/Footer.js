import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            <div className={`contenedor ${styles.contenido}`}>
                <nav className={styles.navegacion}>
                    <Link href='/'>Inicio</Link>
                    <Link href='/sobre-mi'>Sobre Mi</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/contacto'>Contacto</Link>
                </nav>
                <p className={styles.copyright}>Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer
