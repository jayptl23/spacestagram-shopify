import {useEffect, useState} from 'react'

const App = () => {
	useEffect(() => {
		fetch(`https://api.nasa.gov/planetary/apod?count=3&api_key=${process.env.REACT_APP_API_KEY}`)
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setImages(data)
			})
	}, [])

	const [images, setImages] = useState([])

	return <div className='App'>{images && images.map(img => <p>{img.title}</p>)}</div>
}

export default App
