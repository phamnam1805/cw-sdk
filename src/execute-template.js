require("dotenv").config();
const TOKEN_ADDRESS = process.env.TOKEN;
export const executeMint = {
    contractAddr: TOKEN_ADDRESS,
    executeMsg: {
        mint: {
            amount: "10000000",
            recipient: "wasm1q0wusjw6an9m7h7qtn73y24frxd4g7wzulxgj0"
        }
    },
    memo: "hi",
    funds: [
        {
            denom: "umlg",
            amount: "1"
        }
    ]
}