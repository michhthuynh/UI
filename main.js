const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
			
		case 'DECREMENT':
			return state - 1
		
		default:
			return state
	}
}

const store = window.Redux.createStore(counterReducer)

store.subscribe(() => {
	h1Element.innerText = store.getState()
})

const h1Element = document.querySelector('h1')
const incListener = document.querySelector('#increment').addEventListener('click', handleClickInc)
const decListener = document.querySelector('#decrement').addEventListener('click', handleClickDec)

function handleClickInc() {
	store.dispatch({type:'INCREMENT'})
}

function handleClickDec() {
	store.dispatch({type:'DECREMENT'})
}