
// import { Container , Text, Image} from '@nextui-org/react';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '@/components/ui';
import { useEffect, useState } from 'react';
import { localFavorites } from '@/utils';
import { Card, Grid } from '@nextui-org/react';

import FavoritePokemon from '@/components/pokemon/FavoritePokemon';
// import Image from 'next/image';


const FavoritesPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);
  
  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons())  
  }, [])
  
  return (
      <Layout title='Pokémons - Favoritos'>
        {/* <h1>Favoritos</h1> */}
        {
          favoritePokemons.length ===0
            ? <NoFavorites/>
            : (
              <FavoritePokemon favoritePokemons={favoritePokemons}/>
              // <Grid.Container gap={2} direction='row' justify='flex-start'>
              //     {
              //       favoritePokemons.map(id => (
              //         <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              //             <Card isHoverable isPressable css={{ padding:10}}>
              //               <Card.Image
              //                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              //                  width={'100%'}
              //                  height={140}
              //               />
              //             </Card>
              //         </Grid>
              //       ))
              //     }
              // </Grid.Container>
            )
        }
        
      </Layout>
  )
};

export default FavoritesPage;
