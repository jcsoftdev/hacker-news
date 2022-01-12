import { Fav } from '../../context/fav/favsReducer'

export interface FavsLocalStorage {
	[key: string]: Fav
}