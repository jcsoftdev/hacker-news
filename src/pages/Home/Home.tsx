/* eslint-disable no-mixed-spaces-and-tabs */
import {  useEffect, useState } from 'react'
import CardContainer from '../../components/CardContainer'
import Select from '../../components/Select'
import { Fav } from '../../context/fav/favsReducer'
import useFetchNews from '../../hooks/useFetchNews'

const Home = () => {
	const [selected, setSelected] = useState('vue')
	const { response, error, isLoading } = useFetchNews(selected, 1)
	const [news, setNews] = useState<Fav[]>([])


	useEffect(() => {
		if (response) {
			const theNews: Fav[] = response.hits.map((item) => ({
				timeAgo: item.created_at,
				isLiked: false,
				title: item.story_title,
				author: item.author,
				id: item.objectID,
				url: item.story_url
			}))
			setNews(theNews)
		}
	}, [response])

	return (
		<div className="container">
			<Select onSelect={(e) => setSelected(e.value)} />
			{isLoading && <div>Loading...</div>}
			{error && <div>Error</div>}
			{response &&
        !isLoading &&
        <CardContainer favs={news} setFavs={setNews}/>}
		</div>
	)
}

export default Home
