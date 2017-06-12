import React from 'react';
import OrderContainer from '../containers/OrderContainer';

class OrderList extends React.Component {
  constructor(props) {
    super(props);

    console.log('OrderList', props);
  }

  render() {
    return (
      <div>
        {
          this.props.orders.map(o => (
            <OrderContainer key={o.id} order={o} />
          ))
        }
      </div>
    )
  }
}

export default OrderList;
