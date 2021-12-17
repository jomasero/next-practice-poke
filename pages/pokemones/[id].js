import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const PokeDetail = ({
  data: {
    name,
    id,
    sprites
  }
}) => {
  const router = useRouter()

  /*
  if (router.isFallback) {
    return <p>Loading...</p>
  }
  */

  return (
    <div>
      <h1>#{id} {name}</h1>
      <Image src={sprites.front_default} width={500} height={400} />
      <Link href="/">Volver al inicio</Link>
    </div>
  )
}

export default PokeDetail

export const getStaticProps = async ({ params }) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  const data = await response.json()

  return {
    props: { data }
  }
}

export const getStaticPaths = async () => {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } }
  ]

  return {
    paths,
    fallback: 'blocking'
  }
}

/*
export const getServerSideProps = async ({ params }) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  const data = await response.json()

  return {
    props: { data }
  }
}
*/