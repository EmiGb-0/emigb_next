import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/Header.module.css"
import TypeWriter from 'typewriter-effect'


const Header = () => {

    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link href='/'>
                        <a className={styles.logo}>EmiGb <i className="fas fa-code"></i> <br />  <span>Portafolio</span></a>
                    </Link>

                    <nav className={styles.navegacion}>
                        <Link href='/'>Inicio</Link>
                        <Link href='/sobre-mi'>Sobre Mi</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/contacto'>Contacto</Link>
                    </nav>
                </div>

                {router.pathname === '/' && (
                    <h2 className={styles.titulo}>
                        ¡Hola! Soy
                        <TypeWriter 
                            options={{
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 20
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                .pauseFor(2000)
                                .typeString('Programador')
                                .deleteAll()
                                .pauseFor(1000)
                                .typeString('Desarrollador <span style="color: #e6ff07;">web</span>')
                                .pauseFor(200)
                                .deleteChars(3)
                                .typeString('<strong>de</strong> <span style="color: #e6ff07;">videojuegos</span>')
                                .pauseFor(200)
                                .deleteChars(14)
                                .typeString('<strong>de apps </strong><span style="color: #e6ff07;">moviles</span>')
                                .pauseFor(1000)
                                .start();
                            }}
                        />
                    </h2>
                )}
            </div>
        </header>
    )
}

export default Header
