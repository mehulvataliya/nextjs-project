import Head from 'next/head'
import Image from 'next/image'
// import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <style jsx>
        {`
          h2{
            font-size:38px
          }
          h3{
            font-size:28px
          }
          
        `}
      </style> */}
      <Head>
        <title>Hunting coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='/sc.js' strategy='lazyOnload'>
      </Script> */}

      <main className={styles.main}>
        <div className={styles.imagewrap}>
          <Image className={styles.myImg} src="/photo-1510915228340-29c85a43dcfe.avif" width={237} height={158} alt='mm' />
          {/* <img className={styles.myImg} src="/photo-1510915228340-29c85a43dcfe.avif" alt="" width={237} height={158} /> */}
        </div>

        <h1 className={styles.title}>
          <span className='myspan'>&lt;Huntingcoder/&gt;</span>
        </h1>

        {/* <p className={styles.description}>
          A blog for Hunting coders by a hunting coder Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque pariatur dicta minima cum similique optio harum delectus. Animi, dicta corrupti mollitia natus deserunt ullam vitae sapiente cumque! Ratione, deserunt animi!
        </p> */}
        <div >
          <h2 className={styles.h2}>Latest Blogs</h2>
          <div>
            <h3 className={styles.h3}>How to learn Javascript in 2022</h3>
            <p>JavaScript is the langauge used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn Javascript in 2022</h3>
            <p className={styles.p}>JavaScript is the langauge used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div>
            <h3 className={styles.h3}>How to learn Javascript in 2022</h3>
            <p>JavaScript is the langauge used to design logic for the web</p>
            <button className={styles.btn}>Read More</button>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
