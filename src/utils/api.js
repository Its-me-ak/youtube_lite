import axios  from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com'
const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': 'f7651d3ca3msh61b807f79d1fe85p1bcb2bjsn0f5b559ab209',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}