import { useEffect, useState } from 'react'
import { News } from '../pages/Home/types'

const useFetchNews = (search: string, page=0) => {
	const [response, setResponse] = useState<News>()
	const [error, setError] = useState<string|null>(null)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			try {
				const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${search}&page=${page}`)
				const data: News = await res.json()
				setResponse(data)
			} catch (error) {
				setError('Hubo un error')
			}
			setIsLoading(false)
		}
		fetchData()
	}, [search, page])

	return { response, error, isLoading }
}
export default useFetchNews