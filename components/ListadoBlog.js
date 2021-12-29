
import EntradaBlog from "../components/EntradaBlog"
import styles from '../styles/Blog.module.css'


const ListadoBlog = ({entradas, titulo}) => {
    return (
        <>
            <h2 className="heading">{titulo}</h2>

            <div className={styles.blog}>
                {entradas.map(entrada => (
                    <EntradaBlog 
                        key={entrada.url}
                        entrada={entrada}
                    />
                ))}
            </div>
        </>
    )
}

export default ListadoBlog
