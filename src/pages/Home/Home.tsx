import { useState } from 'react'
import Card from '../../components/Card'
import Select from '../../components/Select'
import useFetchNews from '../../hooks/useFetchNews'
import timeAgo from '../../utils/FormatDate'

import styles from './Home.module.css'

const Home = () => {
	const [selected, setSelected] = useState('vue')
	const { response, error, isLoading } = useFetchNews(selected, 1)
	return (
		<div className="container">
			<Select onSelect={(e) => setSelected(e.value)} />
			<div className={styles.CardContainer}>
				{isLoading && <div>Loading...</div>}
				{error && <div>Error</div>}
				{response && !isLoading &&
					response.hits.map((item) => (
						<Card
							key={item.objectID}
							timeAgo={timeAgo(new Date(item.created_at))}
							title={item.story_title}
							isLiked={false}
							author={item.author}
						/>
					))}
			</div>
		</div>
	)
}

export default Home
