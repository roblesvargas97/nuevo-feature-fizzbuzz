const ExplorerService = require("../services/ExplorerService");
const FizzBussService = require("../services/FizzbuzzService");
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

    static getNumberFizzBuzz(number) {
        const pattern = /[0-9]/;
        const validation = pattern.test(number);
        if(!validation){
            throw new Error("The value should be a number");
        }else{
            return FizzBussService.applyValidationInNumber(number);
        }
    }

}


module.exports = ExplorerController;
