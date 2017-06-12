import React from 'react';
import { connect } from 'react-redux';
import OrderList from '../components/OrderList'

class OrderListContainer extends React.Component {
  constructor(props) {
    super(props);

    console.log('OrderListContainer', props);
  }

  componentDidMount() {

      if (this.props.orders.length === 0) {
          this.props.fetchOrders();
      }
  }

  render() {
    return (
        <OrderList orders={this.props.orders} />
    )
  }
}

function mapStateToProps(state) {

    const { app } = state;

    return { 
      isFetching: app.isFetching,
      orders: app.orders
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOrders: o => { alert('Fetching orders...'); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderListContainer);