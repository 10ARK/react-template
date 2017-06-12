import React from 'react';

class Order extends React.Component {
  constructor(props) {
    super(props);

    console.log('Order', props);
  }

  render() {
    return (
      <div>
        order
      </div>
    )
  }
}

export default Order;
