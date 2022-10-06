export const instantiateCw20 = {
    input: {
        wasm: false,
        wasm_file: "artifacts/cw20_base.wasm",
        memo: "Upload cw20",
        code_id: 1357
    },
    instantiateMsg: {
        name: "Raijin Ryuu",
        symbol: "Ryuu",
        decimals: 6,
        initial_balances: [
            {
                address: "wasm1q0wusjw6an9m7h7qtn73y24frxd4g7wzulxgj0",
                amount: "1609000000"
            }
        ],
        mint: {
            minter: "wasm1q0wusjw6an9m7h7qtn73y24frxd4g7wzulxgj0",
            cap: null
        },
        marketing: {
            project: "Ryuu's Project",
            description: "Ryuu's Token",
            marketing: null,
            logo: {
                url: " https://steamuserimages-a.akamaihd.net/ugc/1660106331075249843/7322A01C17927B77D1EA1CA65C67EED23EB19D36/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
            }
        }
    },
    label: " Deploy cw20",
    options: {
        memo: "hi",
        funds: [
            {
                denom: "umlg",
                amount: "1"
            }
        ],
        admin: "wasm1q0wusjw6an9m7h7qtn73y24frxd4g7wzulxgj0"
    }
}

