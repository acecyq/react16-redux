import * as actionTypes from '../actions/ActionTypes';
import { updateState } from '../../utility/Utility';

const startState = {
	counter: 0
}

export default (state = startState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return updateState(state, {counter: state.counter + 1});
		case actionTypes.DECREMENT:
			return updateState(state, {counter: state.counter - 1});
		case actionTypes.ADD:
			return updateState(state, {counter: state.counter + action.val});
		case actionTypes.MINUS:
			return updateState(state, {counter: state.counter - action.val});
		default:
			return state;
	}
}