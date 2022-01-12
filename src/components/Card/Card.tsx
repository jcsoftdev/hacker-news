import { Fav } from '../../context/fav/favsReducer'
import getTimeAgo from '../../utils/FormatDate'
import styles from './Card.module.css'
import timeIcon from '../../assets/time.svg'
import heartIcon from '../../assets/heart.svg'
import heartlikedIcon from '../../assets/heart-liked.svg'

interface CardI extends Fav {
  onClick?: () => void
  onHeartClick?: () => void
}

const Card = ({
	timeAgo,
	author,
	title,
	isLiked,
	onClick,
	onHeartClick,
	url,
}: CardI) => {
	return (
		<div className={styles.Card} onClick={onClick}>
			<a
				href={`${url}`}
				target={'_blank'}
				className={styles.Anchor}
				rel="noreferrer"
			>
				<div className={styles.CardContent}>
					<div className={styles.Time}>
						<img src={timeIcon} alt="time" />
						<span>
							{getTimeAgo(new Date(timeAgo))} by {author}
						</span>
					</div>
					<p className={styles.Title}>{title}</p>
				</div>
			</a>
			<div className={styles.Liked} onClick={onHeartClick}>
				<span>
					{isLiked ? (
						<img src={heartlikedIcon} alt="liked" />
					) : (
						<img src={heartIcon} alt="not liked" />
					)}
				</span>
			</div>
		</div>
	)
}

export default Card
