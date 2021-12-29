import Layout from "../components/Layout"
import styles from '../styles/Contact.module.css'
import ReCAPTCHA from 'react-google-recaptcha'

const Contacto = () => {
    return (
        <Layout
            pagina='Contacto'
        >
            <h1 className="heading">Mis Redes</h1>

            <div className="contenedor">
                <div className={styles.flex}>
                    <a><i className="fab fa-discord"></i><br />Discord</a>
                    <a><i className="fab fa-github"></i><br />Github</a>
                    <a><i className="fab fa-linkedin"></i><br />Linkedin</a>
                    <a><i className="fas fa-envelope"></i><br />Gmail</a>
                </div>
            </div>

            <h2 className="heading">Contacto</h2>

            <div className="contenedor">
                <form className={styles.formulario} action="https://formsubmit.co/emigb7916@gmail.com" method="POST">

                    
                    <fieldset className={styles.mb}>
                        <legend>Manda un mensaje</legend>

                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" id="nombre"  placeholder="Tu nombre" required/>

                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email"  placeholder="Tu email" required/>

                        <label htmlFor="mensaje" required>Escribe tu mensaje</label>
                        <textarea name="mensaje" id="mensaje"></textarea>
                        
                    </fieldset>

                    <input className={styles.btn} type="submit" value="Enviar" />
                </form>
            </div>
        </Layout>
    )
}

export default Contacto
