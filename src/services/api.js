import axios from "axios";

const api = axios.create({
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/players',
    headers: {
      'X-RapidAPI-Key': '2f88c07582msh8aa417f4c4a6e3ep10fe50jsneb42a165e842',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  });

  export default api;