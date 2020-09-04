import React from 'react'
import Congrats from './Congrats'
import GuessWords from './GuessWords'
import './App.css'

function App() {
	return (
		<div className="container">
			<h1>Jotto</h1>
			<Congrats success={true} />
			<GuessWords
				guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
			/>
		</div>
	)
}

export default App
