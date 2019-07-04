import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class Years extends Component {
  constructor(props) {
    super(props);

    this.title = 'Years';
  }

  render() {
    return (<p>{this.title}</p>);
  }
}

// Component State --> Props
const mapStateToProps = state => ({
  items: state.items.items,
});

// Actions to dispatch to
const mapDispatchToProps = {
  addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Years);
