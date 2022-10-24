const connectDB = require("../db");
const uri = require("../dbUri");
const client = connectDB(uri);
const citizensCollection = client.db("cms-citizens").collection("citizens");
const complainsCollection = client.db("cms-citizens").collection("complains");
const votesCollection = client.db("cms-citizens").collection("votes");
module.exports = { citizensCollection, complainsCollection,votesCollection };
