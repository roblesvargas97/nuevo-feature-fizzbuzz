const ExplorerService = require("../services/ExplorerService");
const FizzBuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");

class ExplorerController {
    static getExplorerByMission(mission) {
        const explorers = Reader.readJsonFile(
            process.cwd() + "/" + "explorers.json"
        );
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission) {
        return this.getExplorerByMission(mission).length;
    }
}

module.exports = ExplorerController;
