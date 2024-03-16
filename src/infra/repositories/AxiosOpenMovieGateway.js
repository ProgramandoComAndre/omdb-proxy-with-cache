const axios = require('axios')


class AxiosOpenMovieGateway {
    constructor(OMDb_KEY) {
        this.OMDb_KEY = OMDb_KEY
    }
    async searchMovies(searchText) {
        
            console.log("Fetching results")
            const response = await axios.default.get(`https://www.omdbapi.com/?apikey=${this.OMDb_KEY}&s=${searchText}`)
            if(response.data) {
                const movies = response.data.Search
                return movies
            }


            throw new Error("API unavailable")
       
       
    }
}

module.exports = AxiosOpenMovieGateway