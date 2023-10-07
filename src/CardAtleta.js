import React, { useState } from 'react';
import PainelFavoritos from './painelFavoritos';

function CardAtleta({ jogador, listaJ, setListaJ,status,setStatus ,setInput,setJogador, setMostrarCard}) {
  
      function favJ(){
        setListaJ([...listaJ,{nome:jogador.nome,idade:jogador.idade,time:jogador.time, numeroC:jogador.camisa,imagem:jogador.imagem}])
        console.log(listaJ)
        setStatus(false)
        setInput('')
      }

  return (
    <>
    {status
      ?
        <main className='main'>
        <img src={jogador.imagem} alt={jogador.nome} />
        <h2>Nome: {jogador.nome}</h2>
        <span>Idade: {jogador.idade}</span>
        <span>Camisa: {jogador.camisa}</span>
        <span>Time: {jogador.time}</span>
        <div>
          <button className='buttonCard' id='favoritar' onClick={favJ}>Favoritar Jogador</button>
        </div>
      </main>
      :
      <PainelFavoritos listaJ={listaJ} setStatus={setStatus} setJogador={setJogador} setMostrarCard={setMostrarCard}></PainelFavoritos>

      
    }
    

    </>

  );
}

export default CardAtleta;