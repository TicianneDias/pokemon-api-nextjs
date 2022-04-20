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
    }

    .logo {
        margin-right: auto;
    }
`;


const NavBar = () => {
    return ( 
        <Nav>
            <div className="logo">
                <h1>Pokémon</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/pokemons"><a>Pokémons</a></Link>
            <Link href="/pokedex"><a>Pokedéx</a></Link>
        </Nav>
     );
}
 
export default NavBar;