const readline = require('node:readline/promises')
const { stdin: input, stdout: output } = require('node:process');
class NodeReadlineAdapter {
    constructor(searchMoviesUseCase) {
        this.searchMoviesUseCase = searchMoviesUseCase
        this.interface = undefined
    }

    async inputText() {
        while(true) {
            const answer = await this.interface.question("Search Text: ")
            if(!answer) {
                console.log("Insert a valid answer")
                continue
            }
            const movies = await this.searchMoviesUseCase.execute({searchText: answer})
            console.log(movies)
            const exit = await this.interface.question("Exit  (y,n)?")
            const lowerCase = exit.toLowerCase()
            if(lowerCase === "y") {
                this.interface.close()
                process.exit(0)
            }
            await this.inputText()

        }
    }
    async init(options={}, callback=undefined) {
        this.interface = readline.createInterface({ input, output})

        if(callback) {
            callback()
        }

        await this.inputText()
        

    }

}

module.exports = NodeReadlineAdapter