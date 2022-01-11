import { BrowserRouter, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
	return (
		<nav className={`${styles.Navbar} container`} >

			<NavLink to={'/'} className={(e)=>e.isActive?styles.active:''}>All</NavLink>
			<NavLink to={'/faves'} className={(e)=>e.isActive?styles.active:''}>My faves</NavLink>
		</nav>
	)
}

export default Navbar
