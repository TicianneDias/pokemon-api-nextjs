import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link'
import SadGif from '../public/error404.gif'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

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
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 7000)
    })

    return (
        <Container404>
            <h3>Ops.. That page could not be found!</h3>
            <Image 
                src={SadGif} 
                alt="Sad Pikachu with Page Not Found error" 
                width='200px'
                height='200px'/>
            <p>Go back to <Link href="/"><a>Homepage</a></Link></p>
        </Container404>
     );
}
 
export default PageNotFound;