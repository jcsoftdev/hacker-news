
import { createContext } from 'react'
import { NewState } from './FavsProvider'
import { Fav } from './favsReducer'



interface FavContextProps  extends NewState{
    // Methods
		setPage: (page: number) => void
    setFav: (fav: Fav) => void;
}



export const FavContext = createContext({} as FavContextProps )