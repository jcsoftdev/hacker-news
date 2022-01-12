import { useReducer } from 'react'

import { FavContext } from './FavsContext'
import { Fav, favReducer } from './favsReducer'

export interface NewState {
  news: {
		[key: string]: Fav
	},
	page: number,
}

const INITIAL_STATE: NewState = {
	news: {},
	page: 1,
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const FavProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(favReducer, INITIAL_STATE)

	const setFav = (Fav: Fav) => {
		dispatch({ type: 'SET_FAV', payload: Fav })
	}
	
	const setPage = (page: number) => {
		dispatch({ type: 'SET_PAGE', payload: page })
	}

	return (
		<FavContext.Provider

			value={{
				...state,
				setFav,
				setPage
			}}
		>
			{children}
		</FavContext.Provider>
	)
}
