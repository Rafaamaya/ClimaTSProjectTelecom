import axios from "axios";

const openweathermap = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: '92109bb0ffd34185bc5e1b28030fba47',
    lang: 'es',
    units: 'metric',
  }
})

export default openweathermap;

