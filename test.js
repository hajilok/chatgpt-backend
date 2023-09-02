import fetch from 'node-fetch'
import 'dotenv/config'
import readline from 'readline'

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const api = process.env.API_CHATGPT

const temperature = 1

const openai = async (prompt) => {
    const body = {
        model: "text-davinci-003",
        prompt: prompt,
        temperature: temperature,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,

    }
    const getapi = await fetch(api, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)

    }).then(response => response.json())
        .then(response => {
            const gettext = response.choices[0].text
            const textsplit = gettext.split(/\d+\.\s+/).filter(Boolean);
            return textsplit

        })
    return getapi
}

export default openai

// rl.question('Masukan prompt chatgpt :', (prompt) => {
//     openai(prompt)
//     rl.close()

// })