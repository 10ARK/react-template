import fetch from 'isomorphic-fetch';

export const ADD_ORDER = 'ADD_ORDER';
export const EDIT_ORDER = 'EDIT_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';
export const REQUEST_ORDERS = 'REQUEST_ORDERS';
export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';

export function addOrder(name) {
    return {
        type: ADD_ORDER, 
        name
    }
}
