const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');
// import { openAsBlob } from 'fs'

async function abc() {
    const data = new FormData();
    const filePath = '/home/dirii/nestjs-api-tutorial/src/test.jpg';
    const file = await fs.openAsBlob(filePath);
    data.append('image', file);
    data.append('max_face_num', '1');
    data.append('face_field', 'color, smooth, acnespotmole, wrinkle, eyesattr, blackheadpore');

    const url = 'https://skin-analysis.p.rapidapi.com/face/effect/skin_analyze';
    const options = {
    method: 'POST',
    headers: {
        'X-RapidAPI-Key': 'd49d5e34bfmsh22a5fc3a78d4262p17041ejsnffb70140d991',
        'X-RapidAPI-Host': 'skin-analysis.p.rapidapi.com',
        ...data.getHeaders(),
    },
    body: data
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

abc()