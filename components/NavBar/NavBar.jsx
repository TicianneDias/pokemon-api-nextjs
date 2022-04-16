import Link from "next/link";

const NavBar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Pokémon</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/pokemons"><a>Pokémons</a></Link>
            <Link href="/pokedex"><a>Pokedéx</a></Link>
        </nav>
     );
}
 
export default NavBar;