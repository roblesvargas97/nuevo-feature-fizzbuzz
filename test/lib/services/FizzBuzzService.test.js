const FizzBussService = require("../../../lib/services/FizzbuzzService");
const ExplorerService = require("../../../lib/services/ExplorerService");
const Reader = require("../../../lib/utils/Reader");

describe("Tests for FizzBuzzService", () => {
    const explorers = Reader.readJsonFile(process.cwd() + "/" + "explorers.json");
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");

    test(" Testing 4th explorer in node ", () => {
        expect(
            FizzBussService.applyValidationInExplorer(explorersInNode[3]).trick
        ).toBe(FizzBussService.applyValidationInExplorer(explorersInNode[3]).score);
    });
    test(" Testing last explorer in node ", () => {
        expect(
            FizzBussService.applyValidationInExplorer(explorersInNode[9]).trick
        ).toBe("FIZZBUZZ");
    });
    test(" Testing last explorer in node ", () => {
        expect(
            FizzBussService.applyValidationInExplorer(explorersInNode[9]).trick
        ).toBe("FIZZBUZZ");
    });
    test(" Testing 2nd explorer in node ", () => {
        expect(
            FizzBussService.applyValidationInExplorer(explorersInNode[2]).trick
        ).toBe("FIZZ");
    });
    test(" Testing 4th explorer in node ", () => {
        expect(
            FizzBussService.applyValidationInExplorer(explorersInNode[4]).trick
        ).toBe("BUZZ");
    });
});
