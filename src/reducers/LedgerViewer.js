import {combineReducers} from 'redux';
import {
    LEDGER_WALLET_VIEW_ERROR,
    LEDGER_WALLET_VIEW_START,
    LEDGER_WALLET_VIEW_SUCCESS,
    NONE,
    CUSTOM,
    REMOVE_CUSTOM
} from '../actions/LedgerViewer';
import {SET_BIP_PATH} from "../actions/transactionSigner";


const ledgerViewer = combineReducers({
    ledgerwalletsStatus, bipPath, showCustom
})

export default ledgerViewer;


function ledgerwalletsStatus(state = {}, action) {
    switch (action.type) {
        case NONE:
            return Object.assign({}, state, {
                status: 'loading',
                message: undefined
            });
        case LEDGER_WALLET_VIEW_START:
            return Object.assign({}, state, {
                status: 'loading',
                message: 'Waiting for wallet',
            });
        case LEDGER_WALLET_VIEW_ERROR:
            return Object.assign({}, state, {
                status: 'failure',
                message: 'Error:' + JSON.stringify(action.error),
            });
        case LEDGER_WALLET_VIEW_SUCCESS:
            return Object.assign({}, state, {
                status: 'success',
                message: 'Public Key: ' + action.publicKey,
                pk: [action.publicKey]
            });
    }
    return state;
}

function bipPath(state = {}, action) {
    switch (action.type) {
        case SET_BIP_PATH:
            return action.bipPath
    }
    return state;
}

function showCustom(state = {}, action) {
    switch (action.type) {
        case CUSTOM:
            return {show: true}
        case REMOVE_CUSTOM:
            return {show: false}
    }
    return state;
}
