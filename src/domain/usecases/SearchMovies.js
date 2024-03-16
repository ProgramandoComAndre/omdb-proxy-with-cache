class SearchMovies {
    constructor(dataSource, cache=undefined) {
        this.moviesDataSource = dataSource
        this.cache = cache
    }

    async execute({searchText}) {
        if(this.cache) {
            console.log("Fetching cache")
            const values = await this.cache.get(searchText)
            if(values) {
               console.log("Fetched cache values")
               return values
            }
        }
        const movies = await this.moviesDataSource.searchMovies(searchText)
        if(this.cache) {
            await this.cache.set(searchText, movies)
        }

        return movies
    }
}

module.exports = SearchMovies