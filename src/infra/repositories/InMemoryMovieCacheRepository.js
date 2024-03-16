class InMemoryMovieCache {
    constructor() {
        this.cache = {}
    }
    async get(searchText) {
        return this.cache[searchText]
    }
    async set(searchText, movies) {
        this.cache[searchText] = movies
        return true
    }
}

module.exports = InMemoryMovieCache