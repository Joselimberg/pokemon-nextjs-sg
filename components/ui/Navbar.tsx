import Image from "next/image";
import NextLink from 'next/link';
import { useTheme, Text, Spacer } from "@nextui-org/react";



export const Navbar = () => {
  
  const { theme } = useTheme()
  
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray100.value
    }}>


      <Image 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      
      />

      <NextLink href="/" passHref>
        <Text color="white" h2>P<span>okémon</span> </Text>
      </NextLink>

      {/* <NextLink href="/" passHref>
        <a style={{ display: 'flex' }}>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </a>
      </NextLink> */}

      
      <Spacer css={{ flex:1 }}/>

      <NextLink href="/favorites" passHref>
        <Text color="white">Favoritos</Text>
      </NextLink>

    </div>
  )
}
