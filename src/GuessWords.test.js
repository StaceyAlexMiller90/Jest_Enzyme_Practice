import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../test/testUtils'

import GuessWords from './GuessWords'

const defaultProps = {
	guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
}

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props }
	return shallow(<GuessWords {...setupProps} />)
}

test('does not throw warning with expected props', () => {
	checkProps(GuessWords, defaultProps)
})
