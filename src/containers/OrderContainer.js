import React from 'react';
import { connect } from 'react-redux';
import Order from '../components/Order'

class OrderContainer extends React.Component {
  constructor(props) {
    super(props);

    console.log('OrderContainer', props);
  }

  componentDidMount() {
  }

  render() {
    return (
        <Order />
    )
  }
}

function mapStateToProps(state, ownProps) {

    console.log('OrderContainer mapStateToProps', state, ownProps);

    // Can you do this or to you need to pick the order out of state manually
    return { 
      order: ownProps.order
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);