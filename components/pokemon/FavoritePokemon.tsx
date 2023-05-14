import { Grid, Card } from '@nextui-org/react';
import { Router, useRouter } from 'next/router';
import React from 'react'
import { isJsxClosingFragment } from 'typescript';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface FavoritePokemonProps{
    favoritePokemons: number[];
}

const FavoritePokemon: React.FC<FavoritePokemonProps> = ({favoritePokemons}) => {

    // const router = useRouter();

    // const onFavoriteClicked = () => {
    //     router.push(`/pokemon/${ favoritePokemons }`);
    //     console.log(favoritePokemons)
    // }

  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favoritePokemons.map(id => (
        <FavoriteCardPokemon pokemonId={id} key={id}/>
        // <Grid xs={6} sm={3} md={2} xl={1} key={id}>
        //   <Card isHoverable isPressable css={{ padding: 10 }}>
        //     <Card.Image
        //       src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        //       width={'100%'}
        //       height={140}
        //     />
        //   </Card>
        // </Grid>
      ))}
    </Grid.Container>
  )
}

export default FavoritePokemon