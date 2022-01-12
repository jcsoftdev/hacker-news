import { useEffect, useReducer } from 'react'
import useFavsStorage from '../../hooks/useFavsStorage'

import { FavContext } from './FavsContext'
import { Fav, favReducer } from './favsReducer'

export interface NewState {
  favorites: Fav[],
	page: number,
}

const INITIAL_STATE: NewState = {
	favorites: [],
	page: 1,
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const FavProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(favReducer, INITIAL_STATE)
	// const [favsLocalStorage, setFavsLocalStorage] = useLocalStorage<FavsLocalStorage>(FAVS_STORAGE, {})
	const [favsLocalStorage, setFavsLocalStorage] = useFavsStorage()
	useEffect(() => {
		const favorites = Object.values(favsLocalStorage).filter(item => item.isLiked)
		dispatch({ type: 'SET_ALL_FAVS', payload: favorites })
	}, [])

	useEffect(() => {
		console.log({favsLocalStorage})
		dispatch({ type: 'SET_ALL_FAVS', payload: favsLocalStorage })
	},[favsLocalStorage])

	const setFav = (Fav: Fav) => {
		setFavsLocalStorage(Fav)
	}

	const setAllFavs = (favs: Fav[]) => {
		dispatch({ type: 'SET_ALL_FAVS', payload: favs })
	}
	
	const setPage = (page: number) => {
		dispatch({ type: 'SET_PAGE', payload: page })
	}

	return (
		<FavContext.Provider

			value={{
				...state,
				setFav,
				setPage,
				setAllFavs
			}}
		>
			{children}
		</FavContext.Provider>
	)
}
