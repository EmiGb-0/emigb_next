import Link from 'next/link'
import SwiperFrases from '../components/Swiper'
import Layout from '../components/Layout'
import Proyectos from '../components/Proyectos'
import ListadoBlog from "../components/ListadoBlog"
import styles from '../styles/Inicio.module.css'


export default function Home({entradas}) {
  return (
    <Layout
      pagina='Inicio'
    >
      <h1 className={`heading ${styles.mb}`}>Frases</h1>

      <div className={styles.contenido}>
        <SwiperFrases />
      </div>

      <section className="contenedor">
        {/* <ListadoBlog 
          entradas={entradas}
          titulo='Ultimos articulos'
        /> */}


      </section>

    </Layout>
  )
}

export async function getServerSideProps() {
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`

  const [resBlog] = await Promise.all([
    fetch(urlBlog),
  ])

  const [entradas] = await Promise.all([
    resBlog.json(),
  ])

  return {
    props: {
      entradas
    }
  }
}