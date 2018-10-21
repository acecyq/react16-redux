export const saveCounter = counter => ({type: 'STORE', val: counter});

export const storeCounter = counter => dispatch => {
	setTimeout(() => {
		dispatch(saveCounter(counter));
	}, 3000)
};

export const deleteCounter = index => ({type: 'DELETE', index: index});