import axios  from "axios";

const options = {
    method: 'GET',
    url: 'https://youtube138.p.rapidapi.com/auto-complete/',
    params: {
        q: 'desp',
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': 'f7651d3ca3msh61b807f79d1fe85p1bcb2bjsn0f5b559ab209',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};