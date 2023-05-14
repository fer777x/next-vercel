import Image from 'next/image';
import NextLink from 'next/link';
import { Spacer, Text, useTheme, Link } from '@nextui-org/react';


export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 50px',
            backgroundColor: theme?.colors.gray500.value
        }}>
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de la app"
                width={70}
                height={70}
            />
{/* 
            <NextLink href="/" passHref>
                <Link> */}
                    {/* <Text color='white' h2>P</Text> */}
                <Link href="/">
                    <Text color='white' h3> Pokémon</Text>
                </Link>
                {/* </Link>
            </NextLink> */}

            <Spacer css={{ flex: 1 }}/>
            
            {/* <NextLink href="/favorites" passHref>
                <Link css={{ marginRight: '10px' }}> */}
                <Link href="/favorites">
                    <Text color='white'>Favoritos</Text>
                </Link>
                {/* </Link>
            </NextLink> */}

        </div>
    )
};
