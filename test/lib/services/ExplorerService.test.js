const ExplorerService = require("../../../lib/services/ExplorerService");
const Reader = require("../../../lib/utils/Reader");

describe("Test for ExplorerSeviceClass ", () => {
    const explorers = Reader.readJsonFile(process.cwd() + "/" + "explorers.json");

    test("Explorers in Node ", () => {
        ExplorerService.filterByMission(explorers, "node").forEach((element) => {
            expect(element.mission).toBe("node");
        });
    });

    test("Quantify of explorers in node mission", () => {
        const numberOfExplorersInNode = ExplorerService.filterByMission(
            explorers,
            "node"
        ).length;
        expect(
            ExplorerService.getAmountOfExplorersByMission(explorers, "node")
        ).toEqual(numberOfExplorersInNode);
    });

    test("Array by name of explorers in node", () => {
        const numberOfExplorersInNode = ExplorerService.filterByMission(
            explorers,
            "node"
        ).length;
        expect(
            ExplorerService.getExplorersUsernamesByMission(explorers, "node").length
        ).toEqual(numberOfExplorersInNode);
    });
});
