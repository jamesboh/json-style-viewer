import { ADD_ROW, UPDATE_ROW, SAVE_PAGE, LOAD_PAGE } from './action-creators';

const initialState = {
	rows: [{"fontWeight":"bold","backgroundColor":"yellow"}],
	pages: {} // { {name}: [...rows] }
}

function rowReducer (state = initialState, action) {
	switch (action.type) {
		case ADD_ROW: 
			let rowsArr = state.rows ? 
				[...state.rows, ...initialState.rows] : initialState.rows
			return Object.assign({}, state, {
			    rows: rowsArr,
			});		
		case UPDATE_ROW:
			return Object.assign({}, state, {
				rows: [...state.rows.slice(0,action.i), 
						JSON.parse(action.value), 
						...state.rows.slice(action.i+1,state.rows.length)],
			});
		case SAVE_PAGE:
			return Object.assign({}, state, {
				rows: [{"fontWeight":"bold","backgroundColor":"yellow"}],
				pages: Object.assign(state.pages, action.newPage)
		    });
		case LOAD_PAGE:
			return Object.assign({}, state, {
				rows: state.pages[action.pageName],
			});
		default: return state;
	}
}

const rootReducer = rowReducer;

export default rootReducer;