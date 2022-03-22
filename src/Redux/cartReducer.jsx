const initialState = {
    cartItems: []
}

export const cartReducer = (state = initialState, action ) => {
    switch (action.type) {

        // add to cart action is written here
        case 'ADD_TO_CART' : {
            return {
                ...state,
                cartItems : [...state.cartItems, action.payload ]
            }
        }

        // the delete from cart action is written here
        case 'DELETE_FROM_CART' : {
            return {
                ...state,
                cartItems : state.cartItems.filter(obj => obj.id !== action.payload.id)
            }
        }
        default : return state
    }
} 