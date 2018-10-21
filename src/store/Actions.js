export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const MINUS = 'MINUS';
export const STORE = 'STORE';
export const DELETE = 'DELETE';

export const increment = () => ({type: 'INCREMENT'});
export const decrement = () => ({type: 'DECREMENT'});
export const add = () => ({
	type: 'ADD', 
	val: 10
});
export const minus = () => ({
	type: 'MINUS',
	val: 10
});

export const saveCounter = counter => ({
	type: 'STORE',
	val: counter
});

export const storeCounter = counter => dispatch => {
	setTimeout(() => {
		dispatch(saveCounter(counter));
	}, 3000)
}
export const deleteCounter = index => ({
	type: 'DELETE',
	index: index
});