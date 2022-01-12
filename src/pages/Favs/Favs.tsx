import { useContext } from 'react'
import CardContainer from '../../components/CardContainer'
import { FavContext } from '../../context/fav/FavsContext'

const Favs = () => {

	const {news} = useContext(FavContext)
	const favs = Object.values(news).filter(item => item.isLiked)
	return (
		<div className={'container'}>
			<CardContainer favs={favs}/>
		</div>
	)
}

export default Favs
