import { Link } from 'react-router-dom'

export function HomeTpl() {
  return (
    <>
      <main>
        <h2>Welcome to the Pokemon Picker!</h2>
        <p>You will soon be able to match your personality type to a Pokémon.</p>
        <p>But for now, you can just randomely pick a Pokemon by clicking the button below</p>
      </main>
      <nav>
        <Link to="/pokemon/random">Random Pokemon</Link>
      </nav>
    </>
  );
}