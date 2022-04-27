const ExplorerController = require("../../../lib/controllers/ExplorerController");

describe("Test for Explorer controller", () => {
    test("getExplorerByMission should return explorers in node", () => {
        ExplorerController.getExplorerByMission("node").forEach((explorer) =>
            expect(explorer.mission).toBe("node")
        );
    });
    test("getExplorerByMission should return explorers in java", () => {
        ExplorerController.getExplorerByMission("java").forEach((explorer) =>
            expect(explorer.mission).toBe("java")
        );
    });

    test("Get amount of explorer in node", () => {
        const numberExplorersInNode =
      ExplorerController.getExplorerByMission("node").length;
        expect(ExplorerController.getExplorersAmonutByMission("node")).toEqual(
            numberExplorersInNode
        );

    });

    test("Get amount of explorer in Java", () => {
        const numberExplorersInJava =
      ExplorerController.getExplorerByMission("java").length;
        expect(ExplorerController.getExplorersAmonutByMission("java")).toEqual(
            numberExplorersInJava
        );

    });
});
