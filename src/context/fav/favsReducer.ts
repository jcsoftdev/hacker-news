import { NewState } from './FavsProvider'

export interface Fav {
	id?: string|number;
	title: string
	author: string
	timeAgo: string
	isLiked: boolean
	url : string
}

type FavAction = { type: 'SET_FAV'; payload: Fav }

export const favReducer = (state: NewState, action: FavAction) => {
	switch (action.type) {
	case 'SET_FAV':
		return {
			...state,
			news: {...state.news, [action.payload.id||0]: action.payload},
		}
	default:
		return state
	}
}
