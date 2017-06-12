import { ADD_ORDER, 
         EDIT_ORDER,
         DELETE_ORDER, 
         REQUEST_ORDERS,
         RECEIVE_ORDERS } from '../actions/orderActions';

const initialState = {
    isFetching: true,
    orders: [
        {
            id: 1,
            description: 'first order of the year',
            date: new Date('2017-10-22'),
            status: 'Pending'
        },
        {
            id: 2,
            description: 'second order of the year',
            date: new Date('2017-10-22'),
            status: 'Pending'
        }
    ]
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
