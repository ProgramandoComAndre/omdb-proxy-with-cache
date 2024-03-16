
class RedisMovieCache {
    constructor(connection) {
        this.connection = connection
    }
    async get(searchText) {
        if(!this.connection.isOpen) {
            return undefined
        }
        const movies = await this.connection.get(searchText)
        
        if(!movies) {
            return undefined
        }
        const moviesJson = JSON.parse(movies)
        
        
        return moviesJson
    }
    async set(searchText, movies) {
        try {
        if(!this.connection.isOpen) {
            return false
        }
        console.log(movies)
        await this.connection.set(searchText, JSON.stringify(movies))
        return true
       }
       catch(ex) {
          console.log(ex)
          return false
       }
    }
}

module.exports = RedisMovieCache