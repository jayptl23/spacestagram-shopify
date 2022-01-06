import {useEffect, useState} from 'react'
import Card from './components/Card'

const url = `https://api.nasa.gov/planetary/apod?count=12&thumbs=true&api_key=${process.env.REACT_APP_API_KEY}`

const App = () => {
	const [images, setImages] = useState([])
	const [loading, setLoading] = useState(false)

	async function getImages() {
		try {
			setLoading(true)
			const response = await fetch(url)
			const data = await response.json()
			setLoading(false)
			return data
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		getImages().then(images => {
			setImages(images)
		})
	}, [])

	const handleRefreshClick = () => {
		getImages().then(images => setImages(images))
	}

	return (
		<div className='App'>
			<header className='py-2 px-4 flex justify-between items-center bg-orange-400'>
				<h1 className='text-2xl tracking-wider text-black font-semibold font-mono'>Spacestagram</h1>
				<button className={`px-4 py-1 rounded-full text-white bg-orange-600 font-semibold ${loading && 'hidden'} hover:bg-white hover:text-orange-600`} onClick={handleRefreshClick}>
					Refresh
				</button>
			</header>
			{loading ? (
				<div className='flex items-center justify-center space-x-2 animate-pulse mt-5'>
					<div className='w-8 h-8 bg-orange-500 rounded-full'></div>
					<div className='w-8 h-8 bg-orange-500 rounded-full'></div>
					<div className='w-8 h-8 bg-orange-500 rounded-full'></div>
				</div>
			) : (
				<section className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-2 p-2'>
					{images.map(image => (
						<Card key={image.title} image={image} />
					))}
				</section>
			)}
		</div>
	)
}

export default App
