import React from 'react'
import PropTypes from 'prop-types'

const GuessWords = (props) => {
	let content
	if (props.guessedWords.length === 0) {
		content = <span data-test="guess-instructions">Give it a go!</span>
	} else {
		const guessedWordRows = props.guessedWords.map((word, index) => (
			<tr data-test="guessed-word" key={index}>
				<td>{word.guessedWord}</td>
				<td>{word.letterMatchCount}</td>
			</tr>
		))
		content = (
			<div data-test="guessed-words">
				<h3>Guessed Words</h3>
				<table className="table table-sm">
					<thead className="thead-light">
						<tr>
							<th>Guess</th>
							<th>Matching Letters</th>
						</tr>
					</thead>
					<tbody>{guessedWordRows}</tbody>
				</table>
			</div>
		)
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
