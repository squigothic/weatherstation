import axios from 'axios'
//import { async } from 'q'
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?q="
const apiKey = "0ce3a4459f1ab131929b7a373d549649"

const getData = async (city) => {
    //console.log('tehdään pyyntöä osoitteeseen: ', `${baseUrl}${city}&APPID=${apiKey}`)
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