const redis = require('redis')
function createRedisClient(url, password=undefined) {
    const client = redis.createClient({url, password}).on("error", (e) => {
        console.error(`Failed to create the Redis client with error:`);
        console.error(e)
    })
    return client
}

module.exports = createRedisClient