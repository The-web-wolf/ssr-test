import Head from "next/head"
import Image from "next/image"

export default function Home({title,description,image,url}) {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Head>
    <h1>
      {title}
    </h1>
    <p>
      {description}
    </p>
    <Image src={image} width={1200} height={630} alt={title} />
    </>
  )
}

// ssr
export async function getServerSideProps() {
// lorem api call
const res = await fetch("https://baconipsum.com/api/?type=meat-and-filler")
const data = await res.json()
  return {
    props: {
      title: "Awesome sauce",
      description: data[0].substring(0, 550),
      image: "https://picsum.photos/1200/630",
      url: "https://www.awesomesauce.com",
    }
  }
}