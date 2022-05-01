const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerServices")
const explorers = Reader.readJsonFile("explorers.json");

console.log(explorers);