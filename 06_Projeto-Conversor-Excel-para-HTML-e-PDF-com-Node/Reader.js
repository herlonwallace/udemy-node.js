const fs = require("fs");

class Reader {
    Read(filepatch) {
        fs.readFile(filepatch, "utf-8", (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
            }
        })
    }
}

module.exports = Reader;