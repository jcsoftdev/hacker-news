import { useEffect, useState } from 'react'
import styles from './Select.module.css'
import angular from '../../assets/angular.png'
import react from '../../assets/react.png'
import vue from '../../assets/vue.png'

interface ItemI {
	language: string
	value: string
	icon: string
}

interface Props {
	onSelect: (item: ItemI) => void
}

const theItems: ItemI[] = [
	{ language: 'Angular', value: 'Angular', icon: angular },
	{ language: 'Reactjs', value: 'Reactjs', icon: react },
	{ language: 'Vuejs', value: 'Vuejs', icon: vue },
]

const Select = ({onSelect}: Props) => {
	const [items, setItems] = useState(theItems)
	const [search, setSearch] = useState('')
	const [isActiveItems, setIsActiveItems] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		
		setSearch(e.target.value)
		
	}

	const openItems = () => setIsActiveItems(true)

	const handleSelect = (item: ItemI) => {
		onSelect(item)
		setIsActiveItems(false)
	}

	useEffect(() => {
		searchItem(theItems,search)
	}, [search])

	useEffect(() => {
		items.length > 0 ? setIsActiveItems(true) : setIsActiveItems(false)
	}, [items])

	const searchItem = (items: ItemI[], value: string) => {
		const newItems = items.filter(item => item.value.toLowerCase().includes(value.toLowerCase()))
		setItems(newItems)
	}

	return (
		<div className={`${styles.Select}`}>
			<div className={styles.inputContainer}>
				<input
					type="text"
					placeholder="Select your news"
					value={search}
					onChange={handleChange}
				/>
				<div className={styles.down} onClick={openItems}>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className={`${styles.Items} ${isActiveItems?styles.active:''}`}>
				{items.map((item) => {
					return (
						<div key={item.value} className={styles.Item} onClick={()=>handleSelect(item)}>
							<img src={item.icon} alt="" />
							<span>{item.language}</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Select
