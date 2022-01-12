import { useEffect, useState } from 'react'
import styles from './Pagination.module.css'

interface PaginationI {
  page: number
  onChangePage: (page: number) => void
}

const Pagination = ({
	onChangePage,
	page
}: PaginationI) => {
	const [currentPage, setCurrentPage] = useState(page)
	const [pages] = useState(1)

	const handlePage = (n: number) => {
		setCurrentPage((cp) => cp + n)
	}

	useEffect(() => {
		onChangePage(currentPage)
	}, [currentPage])

	return (
		<div className="container">
			<div className={styles.Pagination}>
				{currentPage > 1 && (
					<button onClick={() => handlePage(-1)} className={styles.Button}>
            Prev
					</button>
				)}
				{Array.from({ length: pages }, (v, i) => currentPage + i - pages).map(
					(page) =>
						page > 0 && (
							<button
								key={page}
								className={styles.Button}
								onClick={() => setCurrentPage(page)}
							>
								{page}
							</button>
						),
				)}
				<button className={`${styles.Button} ${styles.Active}`}>
					{currentPage}
				</button>
				{Array.from({ length: pages }, (v, i) => currentPage + i + 1).map(
					(page) => (
						<button
							key={page}
							className={styles.Button}
							onClick={() => setCurrentPage(page)}
						>
							{page}
						</button>
					),
				)}
				<button className={styles.Button} onClick={() => handlePage(1)}>
          Next
				</button>
			</div>
		</div>
	)
}

export default Pagination
