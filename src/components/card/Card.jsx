import React from 'react'
import './card.css'
import star from '../../assets/star.png'

const Card = (props) => {
	let availability = props.openSpots ? "ONLINE" : "SOLD OUT";

	return (
		<div className="card">
			<img src={'/images/' + props.coverImg} className="card--image" />
			<p className='card--availability'>
				{availability}
			</p>
			<div>
				<img src={star} className="card--star" />
				<span>{props.stats.rating}</span>
				<span className="gray">({props.stats.reviewCount}) • </span>
				<span className="gray">{props.location}</span>
			</div>
			<p>{props.title}</p>
			<p><span className="bold">From ${props.price}</span> / person</p>
		</div>
	)
}

export default Card
