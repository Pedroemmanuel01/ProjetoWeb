import React from 'react';

function AtletaFavorito ({ atleta }) {
  return (
    <div className='atleta-favorito'>
      <img src = {atleta.imagem} alt = {atleta.nome}/>
      <div className='atleta-info'></div>
      <h2>{atleta.nome}</h2>
      <p>Time: {atleta.time}</p>
    </div>
  );
};

export default AtletaFavorito;