import { useContext } from 'react'
import { FavContext } from '../../context/fav/FavsContext'
import { Fav } from '../../context/fav/favsReducer'
import Card from '../Card'
import styles from './CardContainer.module.css'

interface CardContainerI {
  favs: Fav[]
  isLoading: boolean
}

const CardContainer = ({ favs, isLoading }: CardContainerI) => {
	const { setFav } = useContext(FavContext)

	return (
		<div className={styles.CardContainer}>
			{favs.map((item) => (
				<Card
					key={item.id}
					title={!isLoading ? item.title : null}
					author={!isLoading ? item.author : null}
					timeAgo={item.timeAgo}
					isLiked={!isLoading ? item.isLiked : null}
					url={item.url ? item.url : ''}
					onHeartClick={() => {
						setFav(item)
					}}
				/>
			))}
		</div>
	)
}

export default CardContainer
