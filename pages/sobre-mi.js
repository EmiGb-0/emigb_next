import Layout from "../components/Layout"
import styles from "../styles/About.module.css"
import style from "../styles/Icons.module.css"

const Aboutme = () => {
    return (
        <Layout
            pagina='Sobre mi'
        >
            <div className="contenedor">
                <h1>Sobre Mi</h1>
                <div>
                    <p>Empecé en la programacion hace 2 años.</p>
                    <p>Inicie programando en C++, sin saber nada al respecto por obvias razones se me dificulto bastante y despues de una gran frustacion lo abandone.</p>
                    <p>Luego de eso tome un curso en la plataforma Udemy del lenguaje de programacion Java y de ahi comenzo mi gran camino hacia un buen aprendizaje.</p>
                    <p>¿Qué es lo importante?</p>
                    <p>Lo mas importante es sentir pasion por lo que haces y hay que ser conscientes cuales son tus capacidades, habilidades y destrezas en cualquier ámbito.</p>
                    <p>Actualmente siento una gran pasion por la tecnologia, me motiva aprender dia a dia nuevas cosas.</p>
                </div>

                <div>
                    <h2>Skills</h2>

                    <div className={styles.grid}>
                        <div className={`${styles.enlace} ${style.html}`}><i className="fab fa-html5"></i><br /> Html</div>
                        <div className={`${styles.enlace} ${style.css}`}><i className="fab fa-css3-alt"></i><br /> Css</div>
                        <div className={`${styles.enlace} ${style.javascript}`}><i className="fab fa-js-square"></i><br /> JavaScript</div>
                        <div className={`${styles.enlace} ${style.bootstrap}`}><i className="fab fa-bootstrap"></i><br /> Bootstrap</div>
                        <div className={`${styles.enlace} ${style.sass}`}><i className="fab fa-sass"></i><br /> Sass</div>
                        <div className={`${styles.enlace} ${style.tailwind}`}><i className="fas fa-grip-lines"></i><br /> TailwindCss</div>
                        <div className={`${styles.enlace} ${style.php}`}><i className="fab fa-php"></i><br /> Php</div>
                        <div className={`${styles.enlace} ${style.node}`}><i className="fab fa-node-js"></i><br /> Node.js</div>
                    </div>

                    <h2>Frameworks / Librerias</h2>

                    <div className={styles.grid}>
                        <div className={`${styles.enlace} ${style.react}`}><i className="fab fa-react"></i><br /> React.js</div>
                        <div className={`${styles.enlace} ${style.next}`}><i className="fas fa-forward"></i><br /> Next.js</div>
                        <div className={`${styles.enlace} ${style.laravel}`}><i className="fab fa-laravel"></i><br /> Laravel</div>
                    </div>

                    <h2>Bases de Datos</h2>

                    <div className={styles.grid}>
                        <div className={`${styles.enlace} ${style.mysql}`}><i className="fas fa-database"></i><br /> MySql</div>
                        <div className={`${styles.enlace} ${style.postgresql}`}><i className="fas fa-database"></i><br /> PostgreSQL</div>
                        <div className={`${styles.enlace} ${style.mongo}`}><i className="fas fa-database"></i><br /> MongoDB</div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Aboutme
