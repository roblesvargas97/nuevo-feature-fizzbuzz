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

    test("getExplorerByMission should return an error, when we don't find explorers", () => {
        try {
            ExplorerController.getExplorerByMission("php");
        } catch (error) {
            expect(error.message).toBe("Explorers Not Found");
        }
    });

    test("get Explorers in node by name" , () => {
        expect(ExplorerController.getNamesExplorersByMission("node").length).toEqual(ExplorerController.getExplorersAmonutByMission("node"));
    });

    test("getNamesExplorersByMission should return an error, when we don't find explorers", () => {
        try {
            ExplorerController.getNamesExplorersByMission("php");
        } catch (error) {
            expect(error.message).toBe("Explorers Names, Not Found");
        }
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
