import { correctGuess, actionTypes } from './index'

describe('correct guess', () => {
	test('returns an action with type "CORRECT_GUESS"', () => {
		const action = correctGuess()
		// Cannot use toBe when using objects or mutable objects
		expect(action).toEqual({ type: actionTypes.CORRECT_GUESS })
	})
})
