const fs = require("fs");

class Reader {
    static readJsonFile(filePath) {
        try {
            const rawdata = fs.readFileSync(filePath);
            return JSON.parse(rawdata);
        } catch (error) {
            return "no such file or directory";
        }
    }
}

module.exports = Reader;
