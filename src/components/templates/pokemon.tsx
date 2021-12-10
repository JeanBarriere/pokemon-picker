import { POKEMON_BY_ID } from "!queries";
import { fetcher } from "!request";
import { useQuery } from "@apollo/client";
import { PokemonCard } from "@molecules/pokemon-card"
import { HTMLAttributes } from "react"
import { Link } from "react-router-dom";
import useSWR from "swr";

interface PokemonProps extends HTMLAttributes<HTMLDivElement> {
  pokemonId: number
}

function PokemonQuery({ pokemonId }: PokemonProps) {
    const { loading, error, data } = useQuery(POKEMON_BY_ID, { variables: { id: pokemonId }});

    if (error) {
      return <div>Oops, Error</div>
    }
    if (loading) {
      return <PokemonCard name="Loading..." sprite="https://cdn.dribbble.com/users/621155/screenshots/2835314/media/6628954db20eb409b2d358f0b3200f1c.gif" />
    }

    if (data.pokemon.length > 0) {
      const spriteURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
      return <PokemonCard pokemonId={pokemonId} name={data.pokemon[0].name} sprite={spriteURL} />
    }

    return <div>Pokemon { pokemonId } not found</div>
}

function PokemonRequest({ pokemonId }: PokemonProps) {
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, fetcher)

  if (error) {
    return <div>Oops, Error</div>
  }
  if (!data) {
    return <PokemonCard name="Loading..." sprite="https://cdn.dribbble.com/users/621155/screenshots/2835314/media/6628954db20eb409b2d358f0b3200f1c.gif" />
  }

  return <PokemonCard pokemonId={pokemonId} name={data.name} sprite={data.sprites.front_default} />
}

export function PokemonTpl ({ pokemonId }: PokemonProps) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h4>GraphQL</h4>
          <PokemonQuery pokemonId={pokemonId} />
        </div>
        <div>
          <h4>Request</h4>
          <PokemonRequest pokemonId={pokemonId} />
        </div>
      </div>
      <nav>
        <Link to="/pokemon/random">Random</Link>
        <Link to="/">Go home</Link>
      </nav>
    </>
  )
}