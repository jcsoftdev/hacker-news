import { NewState } from './FavsProvider'

export interface Fav {
  id?: string | number
  title: string
  author: string
  timeAgo: string
  isLiked: boolean
  url: string
}

type FavAction =
  | { type: 'SET_FAV'; payload: Fav }
  | { type: 'SET_PAGE'; payload: number }
  | { type: 'SET_ALL_FAVS'; payload: Fav[] }

export const favReducer = (state: NewState, action: FavAction) => {
	switch (action.type) {
	case 'SET_FAV':
		return {
			...state,
			favorites: {
				...state.favorites,
				[action.payload.id || 0]: action.payload,
			},
		}
	case 'SET_PAGE':
		return {
			...state,
			page: action.payload,
		}
	case 'SET_ALL_FAVS': {
		return {
			...state,
			favorites: action.payload,
		}
	}
	default:
		return state
	}
}
