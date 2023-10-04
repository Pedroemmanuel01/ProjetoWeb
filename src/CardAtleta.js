import React from 'react';

function CardAtleta({ jogador, onAddToFavorites }) {
    const handleAddToFavorites = () => {
        onAddToFavorites(jogador);
      };
  return (
    <main className='main'>
      <img src={jogador.imagem} alt={jogador.nome} />
      <h2>Nome: {jogador.nome}</h2>
      <span>Idade: {jogador.idade}</span>
      <span>Camisa: {jogador.camisa}</span>
      <span>Time: {jogador.time}</span>
    </main>
  );
}

export default CardAtleta;