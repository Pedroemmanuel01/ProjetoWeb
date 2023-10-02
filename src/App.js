import { useState } from 'react';
import{ FiSearch } from 'react-icons/fi';
import './style.css';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/players',
  headers: {
    'X-RapidAPI-Key': '2f88c07582msh8aa417f4c4a6e3ep10fe50jsneb42a165e842',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};

function App() {

  const [input,setInput] = useState('')
  const [jogador,setJogador] = useState({})

  async function handleSearch(){
      if(input === ''){
        alert("Digite algo")
        return;
      }

      try {
        const response = await axios.request(options);
        setJogador(response.data);
        setInput("");

      } catch {
        alert("Ops erro ao buscar");
        setInput("")
      }
  }

  return (
    <div className="container">
      <h1 className='title'>Buscador Jogador Basket</h1>

      <div className='containerInput'>
        <input
        type='text'
        placeholder='Digite o Jogador...'
        value={input}
        //pegando tudo que o usuario digitou e passando para o set input
        onChange={(e)=> setInput(e.target.value)}
        />


        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch size={25} color='#fff'/>
        </button>

      </div>
      {Object.keys(jogador).length> 0 &&(
        <main className='main'>
          <h2>Nome:{jogador.first_name}{jogador.last_name}</h2>

          <span>Posição:{jogador.position}</span>
          <span>Coferencia:{jogador.conference}</span>
          <span>Time:{jogador.full_name}</span>
        </main>
      )} 
      

    </div>
  );
}

export default App;
