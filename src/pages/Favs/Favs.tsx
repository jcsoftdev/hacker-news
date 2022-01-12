import { useContext } from 'react'
import { FavContext } from '../../context/fav/FavsContext'
import CardContainer from '../../components/CardContainer'

const Favs = () => {
	const {favorites} = useContext(FavContext)
	return (
		<div className={'container'}>
			<CardContainer favs={favorites} isLoading={false}/>
		</div>
	)
}

export default Favs
