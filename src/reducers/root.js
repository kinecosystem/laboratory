import {combineReducers} from 'redux';
import accountCreator from './accountCreator';
import endpointExplorer from './endpointExplorer';
import transactionBuilder from './transactionBuilder';
import transactionSigner from './transactionSigner';
import xdrViewer from './xdrViewer';
import network from './network';
import routing from './routing';
import LedgerViewer from './LedgerViewer';

const rootReducer = combineReducers({
  accountCreator,
  endpointExplorer,
  transactionBuilder,
  transactionSigner,
  xdrViewer,
  network,
  routing,
  LedgerViewer,
});

export default rootReducer;
