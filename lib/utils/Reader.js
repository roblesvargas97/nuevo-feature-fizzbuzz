const fs = require("fs");

class Reader {
    static readJsonFile(filePath) {
        if(!fs.existsSync(filePath))
            return fs.existsSync(filePath);
        const rawdata = fs.readFileSync(filePath);
        return JSON.parse(rawdata);
    }
}

module.exports = Reader;
