import { gql } from "@apollo/client";

export const POKEMON_BY_ID = gql`
  query pokemonById ($id: Int) {
    pokemon: pokemon_v2_pokemonspecies(where: { id: { _eq: $id }  }) {
      name
    }
  }
`
