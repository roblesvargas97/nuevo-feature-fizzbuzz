const ExplorerService = require("../services/ExplorerService");
const Reader = require("../utils/Reader");

class ExplorerController {
    static getExplorerByMission(mission) {
        const explorers = Reader.readJsonFile(
            process.cwd() + "/" + "explorers.json"
        );
        const explorersInNode =  ExplorerService.filterByMission(explorers, mission);
        if(explorersInNode.length){
            return explorersInNode;
        }else{
            throw new Error("Explorers Not Found");
        }
    }

    static getNamesExplorersByMission(mission) {
        const explorers = Reader.readJsonFile(
            process.cwd() + "/" + "explorers.json"
        );
        return ExplorerService.getExplorersUsernamesByMission(explorers , mission);
    }

    static getExplorersAmonutByMission(mission) {
        return this.getExplorerByMission(mission).length;
    }
}

module.exports = ExplorerController;
