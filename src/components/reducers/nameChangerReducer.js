// reducers/nameChangerReducer.js
const initialState = {
    name: '' // Initial value of the name
};

const nameChangerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_NAME':
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
};

export default nameChangerReducer;
