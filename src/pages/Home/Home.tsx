/* eslint-disable no-mixed-spaces-and-tabs */
import { useContext, useEffect, useState } from 'react'
import CardContainer from '../../components/CardContainer'
import Pagination from '../../components/Pagination'
import Select from '../../components/Select'
import { FavContext } from '../../context/fav/FavsContext'
import { Fav } from '../../context/fav/favsReducer'
import useFetchNews from '../../hooks/useFetchNews'

const Home = () => {
	const { favorites, page, setPage } = useContext(FavContext)
	const [selected, setSelected] = useState('vue')
	const { response, error, isLoading } = useFetchNews(selected, page)
	const [news,  setNews] = useState<Fav[]>([])

	useEffect(() => {
		if (response) {
			matchFavoritesWithNews(news)
		}
	}, [favorites])


	const matchFavoritesWithNews = (news: Fav[]) => {
		const matched = news.map(item => {
			const isLiked = favorites.find(fav => fav.id === item.id)
			if (isLiked) {
				item.isLiked = true
			}
			return item
		})
		setNews(matched)
	}

	useEffect(() => {
		if (response) {
			const theNews: Fav[] = response.hits.map((item) => ({
				timeAgo: item.created_at,
				isLiked: false,
				title: item.title || item.story_title,
				author: item.author,
				id: item.objectID,
				url: item.story_url,
			}))
			matchFavoritesWithNews(theNews)
			setNews(theNews)
		}
	}, [response])

	return (
		<>
			<div className="container">
				<Select onSelect={(e) => setSelected(e.value)} />
				{isLoading && <div>Loading...</div>}
				{error && <div>Error</div>}
				{response && !isLoading && (
					<CardContainer favs={news} />
				)}
			</div>

			<Pagination onChangePage={(e) => setPage(e)} page={page} />
		</>
	)
}

export default Home
