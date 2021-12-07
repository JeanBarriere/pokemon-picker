import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { generateRandomPokemonId } from '!random'
import { NotFoundView } from '@not-found'
import { PokemonTpl } from '@templates/pokemon'

export function PokemonView() {
  const params = useParams()
  const navigate = useNavigate()
  const pokemonId = parseInt(params.pokemonId ?? '', 10)

  // update navigation accordingly
  useEffect(() => {
    if (params.pokemonId === 'random') {
      navigate(`/pokemon/${generateRandomPokemonId()}`, { replace: true })
    }
  }, [pokemonId])

  // empty view -- we're going to navigate and re-render
  if (params.pokemonId === 'random') {
    return <></>
  }
  // invalid pokemonId -- render the not found view 
  if (isNaN(pokemonId)) {
    return <NotFoundView />
  }


  // everything is ready, we query the pokemon data and render the template
  return (
    <PokemonTpl pokemonId={pokemonId} />
  );
}
