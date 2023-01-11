import Link from "next/link";
import styles from "../styles/pokemonCard.module.scss";

export default function PokemonCard({ pokemon }) {
  return (
    <div className={styles.pokemon}>
      <h3>{pokemon.name}</h3>
      <Link href={`pokemon/${pokemon.name}`} pokemon={pokemon}>
        Detalhes
      </Link>
    </div>
  );
}