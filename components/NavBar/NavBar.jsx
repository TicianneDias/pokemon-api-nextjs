import Link from "next/link";
import styled from 'styled-components';

const Nav = styled.nav`
    margin: 10px auto 10px;
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    border-bottom: 1px solid darkred;

    a {
        margin-left: 12px;
        color: black;
        background: linear-gradient(to right, red, #e6e609, blue);
        background-clip: text;
        -webkit-background-clip: text;

        &:hover {
            color: transparent;
            transition: 0.5s ease;
            text-shadow: 0.5px 0.5px 0.5px rgb(0, 0, 0, 0.3);
        }
    }

    .logo {
        margin-right: auto;
    }
`;


const NavBar = () => {
    return ( 
        <Nav>
            <div className="logo">
                <h1>PoKéMoN</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/pokemons"><a>Pokémons</a></Link>
            <Link href="/pokedex"><a>Pokedéx</a></Link>
        </Nav>
     );
}
 
export default NavBar;