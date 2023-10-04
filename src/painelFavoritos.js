import React from 'react';

const PainelFavoritos = ({ favoritos }) => {
  return (
    <div>
      <h2>Atletas Favoritos</h2>
      <ul>
        {favoritos.map((atleta, index) => (
          <li key={index}>{atleta.strPlayer}</li>
        ))}
      </ul>
    </div>
  );
};

export default PainelFavoritos;