import { useState } from 'react';
import{ FiSearch } from 'react-icons/fi';
import './style.css';
/*import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/players',
  headers: {
    'X-RapidAPI-Key': '2f88c07582msh8aa417f4c4a6e3ep10fe50jsneb42a165e842',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};*/


function App() {

  const [input,setInput] = useState('')
  const [jogador,setJogador] = useState({nome:'',posicao:'',idade:'',imagem:''})
  
  //const [jogador,setJogador] = useState({})//

/*  async function handleSearch(){
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
  }*/

  let keyM="chave da API"
  let UrlBase=`https://apiv3.apifootball.com/?action=get_players&player_name=${input}&APIkey=${keyM}`

  async function handleSearch(){
      let resposta= await fetch(UrlBase)
      let dados= await resposta.json()
      setJogador({
        nome:dados[0].player_name,
        idade:dados[0].player_age,
        posicao:dados[0].player_number,
        imagem:dados[0].player_image
      })

      console.log(dados
        )

        console.log(jogador)
      
  }

  return (
    <div className="container">
      <h1 className='title'>Buscador Jogador</h1>

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
      {
       
        <div>
          {jogador.idade}
          <img src={jogador.imagem}/>
        </div>
      }
      

    </div>
  );
}

export default App;

/*      </div>
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

export default App;*/