const axios = require('axios')
const readline = require('node:readline/promises')
const dotenv = require('dotenv')

dotenv.config()

const { stdin: input, stdout: output } = require('node:process');
const OMDb_KEY = process.env.OMDB_KEY;

const rl = readline.createInterface({ input, output})
const cache = {}

async function searchMovies(searchText) {
    if(cache[searchText]) {
        console.log(cache[searchText])
    }
    else {

        const response = await axios.default.get(`https://www.omdbapi.com/?apikey=${OMDb_KEY}&s=${searchText}`)
        if(response.data) {
            const movies = response.data
            cache[searchText] = movies.Search
            console.log(movies.Search)
        } 

    }
}

async function inputText() {
    const answer = await rl.question("Search Text: ")
    await searchMovies(answer)

    const exit = await rl.question("Exit  (y,n)?")
    const lowerCase = exit.toLowerCase()
    if(lowerCase === "y") {
        rl.close()
        process.exit(0)
    }

    await inputText()
 }


inputText()



