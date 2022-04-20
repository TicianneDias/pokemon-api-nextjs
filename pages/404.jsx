import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link'
import SadGif from '../public/error404.gif'

const Container404 = styled.div`
    @font-face {
        font-family: 'PokemonTwo';
        src: url('solid.ttf');
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        font-family: 'PokemonTwo';
    }

    a {
        color: darkblue;

        &:hover {
            text-decoration: underline;
            font-size: medium;
        }
    }
`;

const PageNotFound = () => {
    return ( 
        <Container404>
            <h3>Ops.. That page could not be found!</h3>
            <Image 
                src={SadGif} 
                alt="Sad Pikachu" 
                width='200px'
                height='200px'/>
            <p>Go back to <Link href="/"><a>Homepage</a></Link></p>
        </Container404>
     );
}
 
export default PageNotFound;