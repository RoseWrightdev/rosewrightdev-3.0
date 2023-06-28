import Head from 'next/head'
import Welcome from './Welcome/Welcome.jsx'
export default function Home() {
  return (
    <div>
      <Head>
        <title>RoseWright.dev</title>
        <meta name="description" content="RoseWright.dev" />
        <link rel="icon" href="/rose2.ico" />
      </Head>
      <main>
      <Welcome/>
      </main>
    </div>
  )
}
