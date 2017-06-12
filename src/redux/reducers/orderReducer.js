import { ADD_ORDER, 
         EDIT_ORDER,
         DELETE_ORDER, 
         REQUEST_ORDERS,
         RECEIVE_ORDERS } from '../actions/orderActions';

const initialState = {
    isFetching: true,
    orders: []
}

export function app(state = initialState, action) {
    switch (action.type) {
     
        case ADD_ORDER: 
            return Object.assign({}, state, {
                isFetching: false,
                orders: []
            });

        default:
            return state;
    }
}
