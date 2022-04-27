const ReaderClass = require("../../../lib/utils/Reader");

describe("Testing Reader", () => {
    test("Testinf function readJsonFile", () => {
        expect(
            ReaderClass.readJsonFile(process.cwd() + "/" + "explorers.json")
        ).not.toBe("no such file or directory");
    });
});
