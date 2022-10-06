const { Cosm } = require("./lib/cw-lib");
const { malagaChain } = require("./lib/chain");
const message = require("./index.js");
require("dotenv").config();
const MNEMONIC1 = process.env.MNEMONIC1;
async function main() {
    console.log(message);
    // let cosm = await Cosm.init(malagaChain, MNEMONIC1);
    // deploy
    // console.log(await cosm.initContract(instantiateCw20, 300000));

    // execute
    // console.log(await cosm.execute(executeMint));

    // query
    // console.log(await cosm.query(queryBalance));

}
main();