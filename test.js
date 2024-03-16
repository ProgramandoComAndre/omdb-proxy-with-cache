const NodeReadlineAdapter = require("./src/infra/adapters/cli/NodeReadlineAdapter")
const SearchMovies = require('./src/domain/usecases/SearchMovies')
const AxiosOpenMovieGateway = require('./src/infra/repositories/AxiosOpenMovieGateway')
const dotenv = require('dotenv')
//const InMemoryMovieCache = require('./src/infra/repositories/InMemoryMovieCacheRepository')

const createRedisClient = require('./src/external/redis/RedisConnection')
const RedisMovieCache = require("./src/infra/repositories/RedisMovieCacheRepository")

dotenv.config()

async function initApp() {
    const redisConnection = createRedisClient(process.env.REDIS_URL, process.env.REDIS_PASSWORD)
    await redisConnection.connect()
    const cache = new RedisMovieCache(redisConnection)
    const omdbGateway = new AxiosOpenMovieGateway(process.env.OMDB_KEY)
    const usecase = new SearchMovies(omdbGateway, cache)
    const appAdapter = new NodeReadlineAdapter(usecase)
    await appAdapter.init()
}

initApp()


