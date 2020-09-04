import React from 'react'
import PropTypes from 'prop-types'

const GuessWords = () => {
	return <div></div>
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
