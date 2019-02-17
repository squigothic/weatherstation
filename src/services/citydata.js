import axios from 'axios'
//import { async } from 'q'
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?q="
const apiKey = INSERT_API_KEY

const getData = async (city) => {
    try {
      return await axios
        .get(`${baseUrl}${city}&units=metric&APPID=${apiKey}`)
    } catch (error) {
        console.log('tapahtui virhe: ', error)
    }
}

export default {
    getData: getData
}