import app from "./app";
import config from "./config";

const main = async() =>{

    // server
    app.listen(config.port,() =>{
        console.log(`Express server is running on port ${config.port}`)
    })
}

main();