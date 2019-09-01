import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import NetworkPicker from "./NetworkPicker";
import Introduction from "./Introduction";
import AccountCreator from "./AccountCreator";
import EndpointExplorer from "./EndpointExplorer";
import TransactionBuilder from "./TransactionBuilder";
import TransactionSigner from "./TransactionSigner";
import XdrViewer from "./XdrViewer";
import LedgerViewer from "./LedgerViewer";
import { RouterListener } from "../utilities/simpleRouter";
import SLUG from "../constants/slug";
import logo_kin_white from "../images/logo/LOGO_KIN_WHITE.svg";
import Grid from "./Grid";

function LaboratoryChrome(props) {
  let tabItem = (name, slug) => {
    return (
      <a
        href={"#" + slug}
        className={classNames("buttonList__item s-button s-button--min", {
          "is-active": props.routing.location === slug
        })}
        key={slug}
      >
        {name}
      </a>
    );
  };

  return (
    <div className="lb-chrome">
      <header>
        <Grid className="lb-chrome__grid">
          <div className="so-back site-header">
            <div className="so-chunk">
              <div className="so-siteHeader LaboratoryChrome__header">
                <span className="so-logo">
                  <a href="https://www.kin.org/" className="so-logo__main">
                    <img src={logo_kin_white} alt="logo" />
                  </a>
                  <span className="so-logo__subSite">Laboratory</span>
                </span>
                <NetworkPicker />
              </div>
            </div>
          </div>
          <div className="so-back LaboratoryChrome__siteNavBack">
            <nav className="s-buttonList">
              {tabItem("Introduction", SLUG.HOME)}
              {tabItem("Account Creator", SLUG.ACCOUNT_CREATOR)}
              {tabItem("Endpoint Explorer", SLUG.EXPLORER)}
              {tabItem("Transaction Builder", SLUG.TXBUILDER)}
              {tabItem("Transaction Signer", SLUG.TXSIGNER)}
              {tabItem("XDR Viewer", SLUG.XDRVIEWER)}
              {tabItem("Ledger Viewer", SLUG.ACC_VIEWER)}
            </nav>
          </div>
        </Grid>
      </header>

      {getContent(props.routing.location)}
      <RouterListener />
    </div>
  );
}

function getContent(slug) {
  switch (slug) {
    case SLUG.HOME:
      return <Introduction />;
    case SLUG.ACCOUNT_CREATOR:
      return <AccountCreator />;
    case SLUG.EXPLORER:
      return <EndpointExplorer />;
    case SLUG.TXBUILDER:
      return <TransactionBuilder />;
    case SLUG.TXSIGNER:
      return <TransactionSigner />;
    case "xdr-viewer":
      return <XdrViewer />;
    case "acc-viewer":
      return <LedgerViewer />;
    default:
      return (
        <SimplePage>
          <p>Page "{slug}" not found</p>
        </SimplePage>
      );
  }
}

function SimplePage(props) {
  return (
    <div className="so-back SimplePage__back">
      <div className="so-chunk">{props.children}</div>
    </div>
  );
}

export default connect(chooseState)(LaboratoryChrome);
function chooseState(state) {
  return {
    routing: state.routing
  };
}
