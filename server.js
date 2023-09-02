import axios from 'axios'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import 'dotenv/config'

const api = process.env.ELE_API
const voices_id = process.env.VOICES_ID

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// function makeid(length) {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     const charactersLength = characters.length;
//     let counter = 0;
//     while (counter < length) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         counter += 1;
//     }
//     return result;
// }

const voices = async (text) => {
    const apiUrl = 'https://api.elevenlabs.io/v1/text-to-speech/TznT71uWj2FUVm3YzCc9/stream?optimize_streaming_latency=0';

    const headers = {
        'accept': '*/*',
        'xi-api-key': api,
        'Content-Type': 'application/json',
    };

    const requestData = {
        text: text,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
            stability: 0,
            similarity_boost: 0,
            style: 0,
            use_speaker_boost: true,
        },
    };

    try {
        // Mengirim permintaan POST ke API
        const response = await axios.post(apiUrl, requestData, { headers, responseType: 'stream' });



        // Menyimpan respons MP3 ke file
        const mp3FileName = 'output.mp3';
        const writer = fs.createWriteStream(mp3FileName);
        response.data.pipe(writer);

        return mp3FileName;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }



}

export default voices