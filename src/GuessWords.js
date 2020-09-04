import React from 'react'
import PropTypes from 'prop-types'

const GuessWords = (props) => {
	let content
	if (props.guessedWords.length === 0) {
		content = <span data-test="guess-instructions">Give it a go!</span>
	}
	return <div data-test="component-guessed-words">{content}</div>
}
GuessWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			guessedWord: PropTypes.string.isRequired,
			letterMatchCount: PropTypes.number.isRequired,
		})
	).isRequired,
}

export default GuessWords
