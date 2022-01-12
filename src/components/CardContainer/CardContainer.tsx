import { useContext } from 'react'
import { FavContext } from '../../context/fav/FavsContext'
import { Fav } from '../../context/fav/favsReducer'
import Card from '../Card'
import styles from './CardContainer.module.css'

const CardContainer = ({ favs, setFavs }: { favs: Fav[], setFavs?: (fav: Fav[])=>void }) => {
	const { setFav } = useContext(FavContext)

	return (
		<div className={styles.CardContainer}>
			{favs.map((item) => (
				<Card
					key={item.id}
					{...item}
					onHeartClick={() =>{
						setFav({
							...item,
							isLiked: !item.isLiked,
						})
						setFavs?.(favs.map(fav => fav.id === item.id ? {...item, isLiked: !item.isLiked} : fav))
					}}
				/>
			))}
		</div>
	)
}


export default CardContainer
