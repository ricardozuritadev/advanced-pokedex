import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useGetter } from '../../context/';
import { Params } from './types';
import { capitalize, startWithZeroes } from '../../utils/commons';
import Cookies from 'js-cookie';
import colors from '../../utils/colors';

import Header from '../../components/header';
import Title from '../../components/title';
import Tag from '../../components/tag';

// Get "i18next" cookie with language code from cookies
const languageCookie = Cookies.get('i18next');

const Pokemon = () => {
  const { pokemon } = useParams<Params>();
  const { pokedex, species } = useGetter();
  const [fact, setFact] = useState<string>('');

  // Find pokemon from context by id or name
  const { id, name, sprites, height, weight, types } = pokedex.find(
    ({ id, name }: any) => id === pokemon || name === pokemon
  );

  // Find species from context by id or name
  const { flavor_text_entries, habitat } = species.find(
    ({ id, name }: any) => id === pokemon || name === pokemon
  );

  // Get facts array with all Pokémon facts
  const facts = flavor_text_entries
    .filter((el: any) => el.language.name === languageCookie)
    .map((description: any) => description.flavor_text);

  // Get random fact from "facts" array
  const getRandomFact = () => {
    setFact(facts[Math.floor(Math.random() * facts.length)]);
  };

  // Call "getRandomFact()" function to fill "fact" state with one fact at the first page render
  useEffect(() => {
    getRandomFact();
  }, []);

  const backgroundColor = colors[types[0].type.name];

  const navigate = useNavigate();

  const handleClick = () => navigate('/pokedex');

  return (
    <section className="info" style={{ backgroundColor }}>
      <Header title="Pokémon info">
        <p>prueba</p>
      </Header>

      <section className="info__header">
        <Title>{capitalize(name)}</Title>
        <p className="info__id">#{startWithZeroes(id)}</p>
      </section>

      <section className="info__types">
        {types.map((type: any, index: number) => {
          return <Tag key={index} {...type.type} />;
        })}
      </section>

      <section className="info__sprite">
        <img
          src={sprites.other['official-artwork'].front_default}
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
            <p>{height * 10}cm</p>
          </div>

          <div>
            <p className="info__poke info__poke--blue">Weight</p>
            <p>{(weight * 0.1).toFixed(1)}kg</p>
          </div>

          <div>
            <p className="info__poke info__poke--green">Habitat</p>
            <p>{habitat['name']}</p>
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
