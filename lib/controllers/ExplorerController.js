const ExplorerService = require("../services/ExplorerService");
const Reader = require("../utils/Reader");

class ExplorerController {
    static getExplorerByMission(mission) {
        const explorers = Reader.readJsonFile(
            process.cwd() + "/" + "explorers.json"
        );
        const explorersInMission =  ExplorerService.filterByMission(explorers, mission);
        if(explorersInMission.length){
            return explorersInMission;
        }else{
            throw new Error("Explorers Not Found");
        }
    }

    static getNamesExplorersByMission(mission) {
        const explorers = Reader.readJsonFile(
            process.cwd() + "/" + "explorers.json"
        );
        const namesExplorersInMission = ExplorerService.getExplorersUsernamesByMission(explorers , mission);
        if(namesExplorersInMission.length){
            return namesExplorersInMission;
        }else{
            throw new Error("Explorers Names, Not Found");
        }
    }

    static getExplorersAmonutByMission(mission) {
        return this.getExplorerByMission(mission).length;
    }
}

module.exports = ExplorerController;
