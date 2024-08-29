import axios from 'axios'
import { IData } from '../interfaces/movies.interfaces'
export async function moviesService(data: IData) {
  return (await axios.get(`https://www.omdbapi.com/?apikey=550a55f8&s=${data.s}&page=${data.page}&y=${data.y}&type=${data.type}`)).data
 // return (await axios.get(`http://img.omdbapi.com/?apikey=550a55f8&s=Batman&p=${data.t}`)).data
}

export async function movieDetailService(data: string) {
    return (await axios.get(`https://www.omdbapi.com/?apikey=550a55f8&i=${data}`)).data
  }
  
