import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import CardAtleta from './CardAtleta';
import PainelFavoritos  from './painelFavoritos';

function App() {
  const [listaJ, setListaJ]=useState([])
  const [input, setInput] = useState('');
  const [jogador, setJogador] = useState({ nome: '', posicao: '', idade: '', imagem: '' });
  const [status,setStatus]=useState(true)
  const[mostrarCard, setMostrarCard]=useState(false)
  const classesParaOcultar = ['title', 'containerInput'];

  let keyM = "<API KEY>";
  let UrlBase = `https://apiv3.apifootball.com/?action=get_players&player_name=${input}&APIkey=${keyM}`;

  function ocultarElementosPorClasse(classes) {
    classes.forEach(classe => {
      const elementos = document.querySelectorAll('.' + classe);
  
      elementos.forEach(elemento => {
        elemento.style.display = 'none';
      });
    });
  }
  
  
  const voltaP =()=>{
    setStatus(true)
    setMostrarCard(true)
    setJogador({ nome: '', posicao: '', idade: '', imagem: '' })
    setMostrarCard(false)
 }

  var handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  async function handlePainelFavoritos() {
    if (listaJ.length === 0){
      setMostrarCard(false)
      console.log(listaJ)
      
      ocultarElementosPorClasse(classesParaOcultar)

      return (
      <div className="container">
      
        <div>
          <i class="fas fa-star">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
          </i>
          <button className='PainelFavoritos' type="button" onClick={handlePainelFavoritos}>Painel Favoritos</button>

        </div>    

        <div>
          <button className='buttonCard' id='voltar' onClick={voltaP}>Voltar</button>
        </div>
      </div>
        
      )
    } else {
      setMostrarCard(false)
      console.log(listaJ)
      ocultarElementosPorClasse(classesParaOcultar)
      return (


        <PainelFavoritos listaJ={listaJ} setStatus={setStatus} setJogador={setJogador} setMostrarCard={setMostrarCard}></PainelFavoritos>


      )
    }
  }

  async function handleSearch() {
    setMostrarCard(true)
    if (input === '') {
      alert("Digite o nome de um Jogador");
      return;
      
    }else {
        try{
          let resposta = await fetch(UrlBase);
          let dados = await resposta.json();
          setJogador({
            nome: dados[0].player_name,
            idade: dados[0].player_age,
            camisa: dados[0].player_number,
            time: dados[0].team_name,
            imagem: dados[0].player_image
          });
          setMostrarCard(true);
        } catch (err) {
          console.log(err.message)
          alert("Digite o nome de um Jogador");
        }

    }
    
  }

  return (
    <div className="container">
      
      <div>
        <i class="fas fa-star">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
        </i>
        <button className='PainelFavoritos' type="button" onClick={handlePainelFavoritos}>Painel Favoritos</button>

      </div>
      <h1 className='title'>Buscador de Jogador</h1>

      <div className='containerInput'>
        <input
          type='text'
          id='searchInput'
          placeholder='Digite o Jogador...'
          value={input}
          onKeyPress={handleKeyPress}
          onChange={(e) => setInput(e.target.value)
          }
        />

        <button className='buttonSearch'  type="button" onClick={handleSearch}>
          <FiSearch size={25} color='#fff' />
        </button>
      </div>

      {/* Renderize o CardAtleta somente se os dados do jogador estiverem disponíveis */}
      {mostrarCard && (
        <CardAtleta jogador={jogador} setMostrarCard={setMostrarCard}  setInput={setInput} listaJ={listaJ} setListaJ={setListaJ} status={status} setStatus={setStatus} setJogador={setJogador}/>
      )}

    </div>
  );
}

export default App;