import { useReducer } from 'react'

import { FavContext } from './FavsContext'
import { Fav, favReducer } from './favsReducer'

export interface NewState {
  news: {
		[key: string]: Fav
	}
}

const INITIAL_STATE: NewState = {
	news: {}
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const FavProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(favReducer, INITIAL_STATE)

	const setFav = (Fav: Fav) => {
		dispatch({ type: 'SET_FAV', payload: Fav })
	}

	return (
		<FavContext.Provider
		
			value={{
				...state,
				setFav,
			}}
		>
			{children}
		</FavContext.Provider>
	)
}
