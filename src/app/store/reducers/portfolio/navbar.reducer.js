import * as Actions from 'app/store/actions';

const initialState = {
    open: false
};

function navbar(state = initialState, action) {
    switch ( action.type )
    {
        case Actions.OPEN_CLOSE_NAVBAR:
        {
            return {
                ...state,
                open: !state.open
            }
        }
        default:
        {
            return state;
        }
    }
}

export default navbar;