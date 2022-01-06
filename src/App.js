import {useEffect, useState} from 'react'
import Card from './components/Card'

const url = `https://api.nasa.gov/planetary/apod?count=10&api_key=${process.env.REACT_APP_API_KEY}`

async function getImages() {
	try {
		const response = await fetch(url)
		const data = await response.json()
		console.log(data)
		return data
	} catch (error) {
		console.log(error)
	}
}

const App = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		getImages().then(images => setImages(images))
	}, [])

	return <div className='App'>{images && images.map(image => <Card key={image.title} image={image} />)}</div>
}

export default App
