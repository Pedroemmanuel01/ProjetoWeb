import React, { useState } from 'react';
import { FiSearch, FiStar } from 'react-icons/fi';
import './style.css';
import CardAtleta from './CardAtleta';
import PainelFavoritos from './painelFavoritos';

function App() {
  const [listaJ, setListaJ] = useState([]);
  const [input, setInput] = useState('');
  const [jogador, setJogador] = useState({
    nome: '',
    posicao: '',
    idade: '',
    imagem: '',
  });
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

  const handleSearch = async () => {
    if (input === '') {
      alert('Digite o nome de um Jogador');
      return;
    }

    try {
      const keyM = "96dc42be1ae3e92b7a643494c04e0ec81baa62bc247d502be896c2960ab1213a";
      const UrlBase = `https://apiv3.apifootball.com/?action=get_players&player_name=${input}&APIkey=${keyM}`;
      const resposta = await fetch(UrlBase);
      const dados = await resposta.json();

      if (dados && dados.length > 0) {
        const jogadorData = {
          nome: dados[0].player_name,
          idade: dados[0].player_age,
          camisa: dados[0].player_number,
          time: dados[0].team_name,
          imagem: dados[0].player_image,
        };
        setJogador(jogadorData);
        setMostrarCard(true);
        // Oculta o card de favoritos ao pesquisar novamente
        setMostrarFavoritos(false);
      } else {
        alert('Jogador não encontrado');
      }
    } catch (err) {
      console.error(err.message);
      alert('Erro ao buscar jogador');
    }
  };

  const handleMostrarFavoritos = () => {
    setMostrarFavoritos(!mostrarFavoritos);
    // Quando você clica em favoritos, oculta o card de atleta
    setMostrarCard(false);
  };

  return (
    <div className="container">
      <h1 className="title">Buscador de Jogador</h1>

      <div className="containerInput">
        <input
          type="text"
          id="searchInput"
          placeholder="Digite o Jogador..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" type="button" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>

        <button className="buttonFavoritos" type="button" onClick={handleMostrarFavoritos}>
          <FiStar size={25} color="#fff" />
        </button>
      </div>

      {mostrarCard && (
        <CardAtleta
          jogador={jogador}
          setMostrarCard={setMostrarCard}
          setInput={setInput}
          listaJ={listaJ}
          setListaJ={setListaJ}
        />
      )}

      {mostrarFavoritos && <PainelFavoritos listaJ={listaJ} />}
    </div>
  );
}

export default App;