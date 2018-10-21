import * as actionTypes from '../actions/ActionTypes';

const startState = {
	results: []
}

export default (state = startState, action) => {
	switch (action.type) {
		case actionTypes.STORE:
			return {
				...state,
				results: [...state.results, action.val]
			};
		case actionTypes.DELETE:
			let results = [...state.results];
			results.splice(action.index);
			return {
				...state,
				results: results
			};
		default:
			return state;
	}
}