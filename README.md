# OMDB CLI Proxy with Node.js

Project done at Web Programming class(index.js) and refactored to Clean Architecture as a additional goal (test.js).


# Redis

You can use docker or you can use some instance online. For Docker you need to create an redis.conf file with 'requirepass your-password'
You can execute Redis with docker compose up


# Dotenv

You must define the env file to run this project:

* REDIS_URL= ...
* REDIS_PASSWORD= ...
* OMDB_KEY= ...

# Running the project

For the Redis version run 'node test.js'. For original version with memory cache run 'node index.js'

