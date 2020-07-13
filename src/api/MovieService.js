
import axios from "axios"
import Settings from "../config/Settings";

export const getDetails=(id)=>{
   
    const { API_URL, API_KEY } = Settings;
    // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=Terminator
    const url = `${API_URL}/movie/${id}?api_key=${API_KEY}`;

   return axios.get(url)
      
}