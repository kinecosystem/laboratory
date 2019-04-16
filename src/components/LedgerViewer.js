import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import SelectPicker from './FormComponents/SelectPicker';
import {resetViewer, viewAccountWithLedger} from '../actions/LedgerViewer';
import BipPathPicker from './FormComponents/BipPathPicker';
import {setBIPPath, signWithLedger} from "../actions/transactionSigner";


class LedgerViewer extends React.Component {
    render() {

        let {dispatch} = this.props;
        let {ledgerwalletsStatus,bipPath} = this.props.state;

        console.log('ledgerwallets', bipPath.length)
        if(!bipPath.length)
            bipPath = ''

        let ledgerwalletMessage;
        if (ledgerwalletsStatus.message) {
            let messageAlertType;
            if (ledgerwalletsStatus.status === 'loading') {
                messageAlertType = 's-alert--info';
            } else if (ledgerwalletsStatus.status === 'success') {
                messageAlertType = 's-alert--success';
            } else if (ledgerwalletsStatus.status === 'failure') {
                messageAlertType = 's-alert--alert';
            }

            ledgerwalletMessage =
        <div>
            <br/>
            <div className = {`s-alert TxSignerKeys__ledgerwallet_message ${messageAlertType}`}>
                {ledgerwalletsStatus.message}
            </div>
        </div>
        }


    return <div className="Introduction">
        <div className="so-back">
        <div className="so-chunk">
        <div className="Introduction__container">
        <h2>Ledger Account Viewer</h2>
    <p className="Introduction__lead">Select derivation path to view your account public key</p>
        <BipPathPicker
            value={bipPath}
            onUpdate={(input) => {dispatch(setBIPPath(input))}}
        />
            <button
                className="s-button TxSignerKeys__signBipPath"
                onClick={() => { dispatch(viewAccountWithLedger(bipPath))}}
            >get Public Key</button>

        {ledgerwalletMessage}
    </div>
    </div>
    </div>
    </div>
    }
}

export default connect(chooseState)(LedgerViewer);
function chooseState(state) {
    return {
        state: state.LedgerViewer,
        baseURL: state.network.current.horizonURL,
        networkPassphrase: state.network.current.networkPassphrase
    }
}

// Array of all the xdr types. Then, the most common ones appear at the top
// again for convenience

let bipPaths = ['44\'/2017\'/0\'','44\'/2017\'/1\'','44\'/2017\'/2\'','44\'/2017\'/3\'','44\'/2017\'/4\'','44\'/2017\'/5\'','44\'/2017\'/6\'','44\'/2017\'/7\'','44\'/2017\'/8\'','44\'/2017\'/9\'']
