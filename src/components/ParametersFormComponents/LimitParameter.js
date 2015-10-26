import React from 'react';
import {ExplorerStore} from '../../stores/ExplorerStore';

export let LimitParameter = React.createClass({
  getInitialState: function() {
    return {value: '', error: null};
  },
  onChange: function(event) {
    let value = event.target.value;
    let error;
    if (value < 0 || value > 200) {
      error = 'Limit is invalid.';
      this.setState({value, error});
      return;
    }

    this.setState({value, error});
    ExplorerStore.setParam(this.props.param, value);
  },
  render: function() {
    let {value, error} = this.state;
    return <div className="optionsTable__pair">
        <div className="optionsTable__pair__title">
          Limit
        </div>
        <div className="optionsTable__pair__content">
          <input type="text" value={value} onChange={this.onChange}/>
          {error ? <p className="optionsTable__pair__content__alert">
            {error}
          </p> : ''}
        </div>
      </div>
  }
});