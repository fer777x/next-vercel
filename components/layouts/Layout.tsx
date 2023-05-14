import { FC, use } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';
import { useRouter } from 'next/router';

interface Props {
  title?: string;
  children: React.ReactNode;
}

const  origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {

  // console.log(window.location) ;
  // console.log(origin)

  return (
      <>
        <Head>
            <title>{ title || 'PokemonApp' }</title>
            <meta name="author" content="Fernando Herrera" />
            <meta name="description" content={`Información sobre el pokémon ${ title }`} />
            <meta name="keywords" content={ `${ title }, pokemon, pokedex`} />

            <meta property="og:title" content={`informacion sobre el pokemon: ${title}`} />
            <meta property="og:description" content={`esta es la pagina sobre ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>
      
        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
      
      </>
  )
};
