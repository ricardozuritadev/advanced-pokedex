import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Params, PokemonObj, PokemonSpecies } from './types';
import { capitalize, startWithZeroes } from '../../utils/commons';
import services from '../../services';
import colors from '../../utils/colors';

import Header from '../../components/header';
import Title from '../../components/title';
import Tag from '../../components/tag';

const Pokemon = () => {
  const [pokemonObj, setPokemonObj] = useState<PokemonObj | null>(null);
  const [pokemonSpecies, setPokemonSpecies] = useState<PokemonSpecies | null>(
    null
  );
  const [fact, setFact] = useState<string>('');
  const [factLanguage, setFactLanguage] = useState('en');

  const { pokemon } = useParams<Params>();

  const getPokemonId = async () => {
    const result = await services.pokemons.getPokemonById(pokemon);
    setPokemonObj(result);
  };

  const getPokemonSpecies = async () => {
    const result = await services.pokemons.getPokemonBySpecies(pokemon);
    setPokemonSpecies(result);
    setFact(result.flavor_text_entries[0].flavor_text);
  };

  const facts = pokemonSpecies?.flavor_text_entries
    .filter((el: any) => el.language.name === factLanguage)
    .map((description: any) => description.flavor_text);

  useEffect(() => {
    getPokemonId();
    getPokemonSpecies();
  }, []);

  const getRandomFact = () => {
    setFact(facts && facts[Math.floor(Math.random() * facts.length)]);
  };

  useEffect(() => {
    getRandomFact();
  }, [factLanguage]);

  const changeLanguage = () => {
    if (factLanguage === 'en') {
      setFactLanguage('es');
    } else {
      setFactLanguage('en');
    }
  };

  const backgroundColor = colors[pokemonObj?.types[0].type.name];

  const navigate = useNavigate();

  const handleClick = () => navigate('/pokedex');

  return (
    <section className="info" style={{ backgroundColor }}>
      <Header title="Pokémon info">
        <p>prueba</p>
      </Header>

      <section className="info__header">
        <Title>{pokemonObj && capitalize(pokemonObj.name)}</Title>
        <p className="info__id">
          #{pokemonObj && startWithZeroes(pokemonObj.id)}
        </p>
      </section>

      <section className="info__types">
        {pokemonObj &&
          pokemonObj.types.map((type: any, index: number) => {
            return <Tag key={index} {...type.type} />;
          })}
      </section>

      <section className="info__sprite">
        <img
          src={pokemonObj?.sprites.other['official-artwork'].front_default}
          alt="pokemon-sprite"
          className="info__img"
        />
      </section>

      <section className="info__card">
        <div className="info__menu">
          <p>About</p>
          <p>Base Stats</p>
          <p>Evolution</p>
          <p>Moves</p>
        </div>

        <div className="info__pokemon">
          <div>
            <p className="info__poke info__poke--red">Height</p>
            <p>{pokemonObj && pokemonObj.height * 10}cm</p>
          </div>

          <div>
            <p className="info__poke info__poke--blue">Weight</p>
            <p>{pokemonObj && (pokemonObj.weight * 0.1).toFixed(1)}kg</p>
          </div>

          <div>
            <p className="info__poke info__poke--green">Habitat</p>
            <p>{pokemonSpecies && pokemonSpecies.habitat['name']}</p>
          </div>
        </div>

        <div className="info__randomcontainer">
          <button className="info__randombtn" onClick={getRandomFact}>
            Get random fact
          </button>
        </div>

        {fact ? <p className="info__fact">{fact}</p> : 'Loading...'}
      </section>
    </section>
  );
};

export default Pokemon;
