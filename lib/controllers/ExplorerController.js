const ExplorerService = require("../services/ExplorerService");
const FizzBussService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");

class ExplorerController {
    static getExplorerByMission(mission) {
        const explorers = Reader.readJsonFile(
            process.cwd() + "/" + "explorers.json"
        );
        return ExplorerService.filterByMission(explorers, mission);

    }

    static getNamesExplorersByMission(mission) {
        const explorers = Reader.readJsonFile(
            process.cwd() + "/" + "explorers.json"
        );
        const namesExplorersInMission = ExplorerService.getExplorersUsernamesByMission(explorers , mission);

        return namesExplorersInMission;
    }

    static getExplorersAmonutByMission(mission) {
        return this.getExplorerByMission(mission).length;
    }

    static getNumberFizzBuzz(number) {
        return FizzBussService.applyValidationInNumber(number);
    }

}


module.exports = ExplorerController;
