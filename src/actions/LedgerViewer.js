import LedgerTransport from '@ledgerhq/hw-transport-u2f';
import LedgerStr from '@ledgerhq/hw-app-str';
//import {Transaction, Keypair, xdr} from 'stellar-sdk';
//var BP = require("bluebird");


export const LEDGER_WALLET_VIEW_START = 'LEDGER_WALLET_VIEW_START';
export const LEDGER_WALLET_VIEW_SUCCESS = 'LEDGER_WALLET_VIEW_SUCCESS';
export const LEDGER_WALLET_VIEW_ERROR = 'LEDGER_WALLET_VIEW_ERROR';
export const NONE = 'NONE';

export function viewAccountWithLedger(bipPath) {

    return dispatch => {

        if(bipPath == ''){
            dispatch({
                type: NONE,
            })
            return;
        }

        let onError = err => {
            if (err.message) {
                err = err.message;
            } else if (err.errorCode == 2) {
                err = `Couldn't connect to Ledger device. Connection can only be established using a secure connection.`;
            } else if (err.errorCode == 5) {
                err = `Connection timeout.`;
            }
            dispatch({
                type: LEDGER_WALLET_VIEW_ERROR,
                error: err,
            });
        };

        let onConnect = (ledgerApi) => {
            let publicKey;

            ledgerApi.getPublicKey(bipPath).then(result =>{
                console.log('PK',result);
                publicKey = result.publicKey
                dispatch({
                    type: LEDGER_WALLET_VIEW_SUCCESS,
                    publicKey,
                });
            }).catch(onError);
        };

        const openTimeout = 10 * 1000;
        LedgerTransport.create(openTimeout).then((transport) => {
            transport.setDebugMode(true);
            onConnect(new LedgerStr(transport));
        }).catch(onError);
    };
}

// Resets everything to its default state
export function resetViewer() {
    return dispatch => {
        dispatch({
            type: LEDGER_WALLET_VIEW_START,
        });
    };
}
