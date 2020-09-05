import { actionTypes } from '../actions'
import successReducer from './successReducer'

test('returns default state of false, if no action is passed', () => {
	const newState = successReducer(undefined, {})
	expect(newState).toBe(false)
})

test('returns state of true when action "CORRECT_GUESS" is passed', () => {
	//Pass undefined to make it use the initial state
	const newState = successReducer(undefined, {
		type: actionTypes.CORRECT_GUESS,
	})
	expect(newState).toBe(true)
})
