import {useEffect, useState} from 'react'
import Card from './components/Card'

const url = `https://api.nasa.gov/planetary/apod?count=3&api_key=${process.env.REACT_APP_API_KEY}`

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
	useEffect(() => {
		getImages().then(images => setImages(images))
	}, [])

	const [images, setImages] = useState([])

	return <div className='App'>{images && images.map(img => <Card />)}</div>
}

export default App
