const TOKEN_ADDRESS = process.env.TOKEN;
export const queryBalance = {
    contractAddr: TOKEN_ADDRESS,
    queryMsg: {
        balance: {
            address: "wasm1q0wusjw6an9m7h7qtn73y24frxd4g7wzulxgj0"
        }
    }
}