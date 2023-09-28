import { useState } from 'react'
import { Navbar, Hero, Card } from './components'
import './App.css'
import cardData from './data.js'

function App() {

	const cardElement = cardData.map(card => {
		return (<Card
			key={card.id}	// needs this 
			{...card}
		/>);
	});

	return (
		<>
			<Navbar />
			<Hero />
			<section className='card--container'>
				{cardElement}
			</section>
		</>
	)
}

export default App
