import React from 'react';
import {connect} from 'react-redux';

export default function Introduction() {
  return <div className="Introduction">
    <div className="so-back">
      <div className="so-chunk">
        <div className="Introduction__container">
          <h2>Kin Laboratory</h2>
          <p className="Introduction__lead">The Kin Laboratory is a set of tools that enables people to try out and learn about the Kin network. The laboratory can <a href="#txbuilder">build transactions</a>, <a href="#txsigner">sign them</a>, and <a href="#explorer?resource=transactions&endpoint=create">submit them to the network</a>. It can also <a href="#explorer">make requests to any of the Horizon endpoints</a>.</p>
        </div>
      </div>
    </div>
  </div>
}
