const { toBase64, parseMsg, Cosm } = require("./lib/cw-lib");
const {malagaChain} = require("./lib/chain");
const {instantiateCw20} = require("./instantiate-template");
const {executeMint} = require("./execute-template");
const {queryBalance} = require("./query-template")
require("dotenv").config();
const MNEMONIC1 = process.env.MNEMONIC1;
async function main() {
    let cosm = await Cosm.init(malagaChain, MNEMONIC1);
    // deploy
    console.log(await cosm.instantiateContract(instantiateCw20, 300000));

    // execute
    // let msg = cosm.parseExecuteObject(executeMint);
    // console.log(await cosm.execute(msg));

    // // query
    // let msg = cosm.parseQueryObject(queryBalance);
    // console.log(await cosm.query(msg));

}
main();