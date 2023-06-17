function BotService(){
    this.serviceName = "botservice";
}

BotService.prototype.createBot = function(name , megaData){
    megaData.botName = name;

    return megaData;
}


module.exports = {
    getInst : function(){
        return new BotService();
    }
}
