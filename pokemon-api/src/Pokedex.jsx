import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    console.log(pokemonData);
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      .then(response => {
        setPokemonData(response.data.results);
        
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <Container>
      <Title>The Kanto PokeDex!</Title>
      <CardContainer>
        {pokemonData.map((pokemon, index) => (
          <Card key={index}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeee4;
`;

const Title = styled.h1`
  text-align: center;
  color: black;
  padding: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 150px;

  img {
    width: 80px;
    height: 80px;
  }

  h2 {
    text-transform: capitalize;
    color: black;
    font-size: small;
  }
`;

export default Pokedex;