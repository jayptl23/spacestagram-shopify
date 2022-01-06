import {useState} from 'react'
import {HeartIcon} from '@heroicons/react/outline'
import {HeartIcon as SolidHeartIcon} from '@heroicons/react/solid'

const Card = ({image}) => {
	const [isLiked, setIsLiked] = useState(false)

	const handleLike = e => setIsLiked(prevState => !prevState)

	const {title, url, hdurl, date, explanation} = image
	return (
		<article className='bg-gray-200 drop-shadow-md rounded-lg'>
			<img className='mb-1 rounded-t-sm h-64 w-full object-cover' src={url || hdurl} alt={title} />
			<div className='p-2'>
				<div className='flex justify-between items-center px-2 mb-2'>
					<div>
						<p className='text-xs font-bold mb-1'>{title}</p>
						<p className='text-xs font-semibold text-gray-800'>{date}</p>
					</div>
					{isLiked ? (
						<SolidHeartIcon className='h-7 w-7 cursor-pointer text-red-500' onClick={handleLike} />
					) : (
						<HeartIcon className='h-7 w-7 cursor-pointer text-gray-400 hover:scale-110 hover:text-red-500' onClick={handleLike} />
					)}
				</div>
				<p className='text-xs px-2'>{explanation}</p>
			</div>
		</article>
	)
}

export default Card
