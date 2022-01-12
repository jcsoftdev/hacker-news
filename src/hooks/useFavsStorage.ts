import { useEffect, useState } from 'react'
import { FavsLocalStorage } from '../components/CardContainer/types'
import { FAVS_STORAGE } from '../constants/storage'
import { Fav } from '../context/fav/favsReducer'
import useLocalStorage from './useLocalStorage'


const useFavsStorage = () => {
	const [favs, setFavs] = useLocalStorage<FavsLocalStorage>(FAVS_STORAGE, {})
	const [favsArray, setFavsArray] = useState<Fav[]>([])
	const setFavsStorage = (fav: Fav) => {
		setFavs((currentFavs) => ({...currentFavs, [fav.id||'']: {
			...fav,
			isLiked: !fav.isLiked,
		}}))
	}

	const getFavsLikedArray = () => {
		const favsLikedArray = Object.values(favs).filter(fav => fav.isLiked)
		setFavsArray(favsLikedArray)
	}

	useEffect(() => {
		getFavsLikedArray()
	},[favs])

	return [favsArray, setFavsStorage] as const
}

export default useFavsStorage
