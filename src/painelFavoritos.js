import React from 'react';

const PainelFavoritos = ({listaJ,setStatus, setJogador,setMostrarCard}) => {
  console.log(listaJ)
  const voltaP =()=>{
     setStatus(true)
     setMostrarCard(true)
     setJogador({ nome: '', posicao: '', idade: '', imagem: '' })
     setMostrarCard(false)
  }
  return (
    <div className='container' id='painelFav'>
      {
        listaJ.length<1 ?
        <p>Nenhum jogador Favoritado</p>
        :
        <div className='main'>
           <h2>Atletas Favoritos</h2>
           <div> 
              {Object.values(listaJ).map((el,index)=>(
                <div> 
                  <img src={el.imagem}></img>
                  <p>Nome: {el.nome}</p>
                  <p>Time: {el.time}</p>
                  <p>Numero: {el.numeroC}</p>
                  <p>Idade: {el.idade}</p>
                </div>
                  
              ))}
           </div>
        </div>
      }
      
        <div>
          <button className='buttonCard' id='voltar' onClick={voltaP}>Voltar</button>
        </div>
    </div>
  );
};

export default PainelFavoritos;