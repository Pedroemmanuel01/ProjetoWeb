import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import CardAtleta from './CardAtleta';

function App() {
  const [input, setInput] = useState('');
  const [jogador, setJogador] = useState({ nome: '', posicao: '', idade: '', imagem: '' });
  const [mostrarCard, setMostrarCard] = useState(false);

  let keyM = "6100a4ce03056256e65cd70132563c54cc3b44eb0c62857436786b213599430a";
  let UrlBase = `https://apiv3.apifootball.com/?action=get_players&player_name=${input}&APIkey=${keyM}`;

  async function handleSearch() {
    let resposta = await fetch(UrlBase);
    let dados = await resposta.json();
    if (input === '') {
      alert("Digite o nome de um Jogador");
      return;
    }
    setJogador({
      nome: dados[0].player_name,
      idade: dados[0].player_age,
      camisa: dados[0].player_number,
      time: dados[0].team_name,
      imagem: dados[0].player_image
    });
    setMostrarCard(true);
  }

  return (
    <div className="container">
      <h1 className='title'>Buscador Jogador</h1>

      <div className='containerInput'>
        <input
          type='text'
          placeholder='Digite o Jogador...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch size={25} color='#fff' />
        </button>
      </div>

      {/* Renderize o CardAtleta somente se os dados do jogador estiverem disponíveis */}
      {mostrarCard && (
        <CardAtleta jogador={jogador}/>
      )}

    </div>
  );
}

export default App;