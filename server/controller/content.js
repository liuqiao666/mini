let fs = require('fs');

module.exports.example = (param) => {
    let example = JSON.parse(fs.readFileSync('server/data/example.json'));
    return {data: example, param: param};
};