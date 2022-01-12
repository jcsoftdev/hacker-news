import { useContext } from 'react'
import { FavContext } from '../../context/fav/FavsContext'
import { Fav } from '../../context/fav/favsReducer'
import Card from '../Card'
import styles from './CardContainer.module.css'

interface CardContainerI {
  favs: Fav[]
}

const CardContainer = ({ favs }: CardContainerI) => {
	const {setFav} = useContext(FavContext)

	return (
		<div className={styles.CardContainer}>
			{favs.map((item) => (
				<Card
					key={item.id}
					{...item}
					onHeartClick={() => {
						setFav(item)
					}}
				/>
			))}
		</div>
	)
}

export default CardContainer
