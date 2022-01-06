const Card = ({image}) => {
	const {title, url, hdurl, date, explanation} = image
	return (
		<article>
			<p>{title}</p>
			<img src={url || hdurl} alt={title} width='300' height='300' style={{objectFit: 'cover'}} />
			<p>{date}</p>
			<p>{explanation}</p>
		</article>
	)
}

export default Card
