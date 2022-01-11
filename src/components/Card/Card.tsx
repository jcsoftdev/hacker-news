import styles from './Card.module.css'
import timeIcon from '../../assets/time.svg'
import heartIcon from '../../assets/heart.svg'
import heartlikedIcon from '../../assets/heart-liked.svg'

interface CardI {
  title: string
  author: string
  timeAgo: string
  isLiked: boolean
}

const Card = ({timeAgo, author, title, isLiked}: CardI) => {
	return (
		<div className={styles.Card}>
			<div className={styles.CardContent}>
				<div className={styles.Time}>
					<img src={timeIcon} alt="time" />
					<span>{timeAgo} by {author}</span>
				</div>
				<p className={styles.Title}>{title}</p>
			</div>
			<div className={styles.Liked}>
				<span>{isLiked ? <img src={heartlikedIcon} alt="liked" /> : <img src={heartIcon} alt="not liked" />}</span>
			</div>
		</div>
	)
}

export default Card
