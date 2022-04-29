const FizzBussService = require("../../../lib/services/FizzbuzzService");
const ExplorerService = require("../../../lib/services/ExplorerService");
const Reader = require("../../../lib/utils/Reader");

describe("Tests for FizzBuzzService applyValidationInExplorer", () => {
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

describe("Test for FizzBuzz Service applyValidationInNumber", () => {

    test("getNumberFizzBuzz FizzBuzz should return an error, when the value is not a number", () => {
        try {
            FizzBussService.applyValidationInNumber("Hola");
        } catch (error) {
            expect(error.message).toBe("The value should be a number");
        }
    });

    test(" applyValidationInNumber 15 should return FizzBuzz", () => {
        expect(FizzBussService.applyValidationInNumber(15)).toBe("FIZZBUZZ");
    });

    test(" applyValidationInNumber 10 should return Buzz", () => {
        expect(FizzBussService.applyValidationInNumber(10)).toBe("BUZZ");
    });

    test(" applyValidationInNumber 9 should return Fizz", () => {
        expect(FizzBussService.applyValidationInNumber(9)).toBe("FIZZ");
    });

    test(" applyValidationInNumber 7 should return 7", () => {
        expect(FizzBussService.applyValidationInNumber(7)).toBe(7);
    });

    test(" applyValidationInNumber 4.4 should return 4.4", () => {
        expect(FizzBussService.applyValidationInNumber(4.4)).toBe(4.4);
    });

    test(" applyValidationInNumber -9 should return Fizz", () => {
        expect(FizzBussService.applyValidationInNumber(-9)).toBe("FIZZ");
    });
});
