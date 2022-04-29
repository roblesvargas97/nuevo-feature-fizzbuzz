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

    test("get Explorers in node by name" , () => {
        expect(ExplorerController.getNamesExplorersByMission("node").length).toEqual(ExplorerController.getExplorersAmonutByMission("node"));
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

    test("getNumberFizzBuzz 15 should return FizzBuzz", () => {
        expect(ExplorerController.getNumberFizzBuzz(15)).toBe("FIZZBUZZ");
    });

    test("getNumberFizzBuzz 10 should return Buzz", () => {
        expect(ExplorerController.getNumberFizzBuzz(10)).toBe("BUZZ");
    });

    test("getNumberFizzBuzz 9 should return Fizz", () => {
        expect(ExplorerController.getNumberFizzBuzz(9)).toBe("FIZZ");
    });

    test("getNumberFizzBuzz 7 should return 7", () => {
        expect(ExplorerController.getNumberFizzBuzz(7)).toBe(7);
    });

    test("getNumberFizzBuzz 4.4 should return 4.4", () => {
        expect(ExplorerController.getNumberFizzBuzz(4.4)).toBe(4.4);
    });

    test("getNumberFizzBuzz -9 should return Fizz", () => {
        expect(ExplorerController.getNumberFizzBuzz(-9)).toBe("FIZZ");
    });

});
