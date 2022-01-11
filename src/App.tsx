import Home from './pages/Home'
import Favs from './pages/Favs'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
function App() {
	return (
		<div className="App">
			<Header />
			<BrowserRouter>
				<Navbar/>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='favs' element={<Favs/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}


export default App