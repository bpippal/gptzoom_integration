const bodyparser = require("body-parser");
const appConfig = require("./config/app");

//Storing all data at server level for now
let megaData = {};

let botservice = require("./Services/botservice");

function loadRoutes(app){
    
    //Attach all parser's on app such as json-parser, etc.
    app.use(bodyparser.json());
        
    //Route's can be loaded a better way/separated from the actual logic layer ? TODO
    
    
    //Bot API's ->

    app.post("/createBot" , (req, res) => {

        let payload = req.body;

        let botServiceInst = botservice.getInst();
        let botResult = botServiceInst.createBot(payload.name , megaData);

        return res.json(botResult);
    })


    app.get("/getBot" , (req, res) => {

        return res.json(megaData);
    })

    




    //Default route handling for all other endpoints
    app.use("*" , (req, res) => {
        res.status(404).json({err : "Route not Found"});
    })

    app.listen(appConfig.port, () => {
        console.log("**************************Finished Server Boot Up Process********************");
        console.log(`**************************SERVER RUNNING ON PORT ${appConfig.port}********************`);
        console.log("\n");
    })

}

module.exports = loadRoutes;