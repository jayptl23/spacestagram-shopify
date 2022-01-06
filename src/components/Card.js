import {HeartIcon} from '@heroicons/react/outline'

const Card = ({image}) => {
	const {title, url, hdurl, date, explanation} = image
	return (
		<article className='bg-gray-200 drop-shadow-md rounded-lg'>
			<img className='mb-1 rounded-t-sm' src={url || hdurl} alt={title} />
			<div className='p-2'>
				<div className='flex justify-between items-center px-2 mb-2'>
					<div>
						<p className='text-xs font-bold mb-1'>{title}</p>
						<p className='text-xs font-semibold text-gray-800'>{date}</p>
					</div>
					<HeartIcon className='h-7 cursor-pointer text-gray-400 hover:scale-110 hover:text-red-500' />
				</div>
				<p className='text-xs px-2'>{explanation}</p>
			</div>
		</article>
	)
}

export default Card
