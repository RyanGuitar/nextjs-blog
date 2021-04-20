import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Image Test</title>
      </Head>
      <br/>
      <Image 
       layout="responsive"
       src="/images/unforgiven.jpg"
       alt="unforgiven poster"
       width={213}
       height={199}
       />
      <p>Example of linking to another page with different layout styling.</p>
      <Image
        layout="responsive"
        src="/images/header.jpg"
        alt="unforgiven image"
        width={300}
        height={168}
      />
      <p>Testing two responsive images to see if space between loads is conserved.</p>
      <Image
       layout="responsive"
       src="/images/good.jpg"
       alt="the good the bad and the ugly"
       width={311}
       height={162}
      />
      <p>Some text to keep spacing</p>
      <Image 
       layout="responsive"
       src="/images/dirty.jpg"
       alt="dirty harry"
       width={282}
       height={179}
       />
       <p>some more spacing text</p>
    </Layout>
  )
}