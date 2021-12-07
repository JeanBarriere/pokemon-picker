import { Header } from "@atoms/header";
import { Card } from "@atoms/card";
import { Image } from "@atoms/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface PokemonCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  pokemonId?: number
  name: string
  sprite: string
}

export function PokemonCard ({ pokemonId, name, sprite }: PokemonCardProps) {
  return (
    <Card>
      <Header level={2}>{name} {pokemonId && `#${pokemonId}` }</Header>
      <Image src={sprite} alt={`${name} sprite`} height={256} />
    </Card>
  )
}