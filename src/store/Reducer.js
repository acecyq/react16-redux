import * as Actions from './Actions';

const startState = {
	counter: 0,
	results: []
}

// export default (state = startState, action) => {
	switch (action.type) {
		case Actions.INCREMENT:
			return {
				...state,
				counter: state.counter + 1
			}
		case Actions.DECREMENT:
			return {
				...state,
				counter: state.counter - 1
			}
		case Actions.ADD:
			return {
				...state,
				counter: state.counter + action.val
			}
		case Actions.MINUS:
			return {
				...state,
				counter: state.counter - action.val
			}
		case Actions.STORE:
			return {
				...state,
				results: [...state.results, state.counter]
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