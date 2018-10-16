import * as Actions from '../Actions';

const startState = {
	results: []
}

export default (state = startState, action) => {
	switch (action.type) {
		case Actions.STORE:
			return {
				...state,
				results: [...state.results, action.val]
			}
		case Actions.DELETE:
			let results = [...state.results];
			results.splice(action.index);
			return {
				...state,
				results: results
			}
		default:
			return state;
	}
}