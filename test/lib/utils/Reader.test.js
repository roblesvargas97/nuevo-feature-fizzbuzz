const ReaderClass = require("../../../lib/utils/Reader");

describe("Testing Reader", () => {
    test("Testinf function readJsonFile", () => {
        expect(
            ReaderClass.readJsonFile(process.cwd() + "/test/" + "explorers.json")
        ).not.toBeFalsy();
    });
});
