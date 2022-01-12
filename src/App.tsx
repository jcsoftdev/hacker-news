import Home from './pages/Home'
import Favs from './pages/Favs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-loading-skeleton/dist/skeleton.css'

import { FavProvider } from './context/fav/FavsProvider'
import Header from './components/Header'
import Navbar from './components/Navbar'
import './index.css'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {
	return (
		<FavProvider>
			<SkeletonTheme baseColor="#D2D2D2" highlightColor="#E2E2E2" duration={.75}>
				<div className="App container">
					<Header />
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="favs" element={<Favs />} />
						</Routes>
					</BrowserRouter>
				</div>
			</SkeletonTheme>
		</FavProvider>
	)
}

export default App
