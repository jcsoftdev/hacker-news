import getTimeAgo from '../../utils/FormatDate'
import styles from './Card.module.css'
import timeIcon from '../../assets/time.svg'
import heartIcon from '../../assets/heart.svg'
import heartlikedIcon from '../../assets/heart-liked.svg'
import Skeleton from 'react-loading-skeleton'

interface CardI {
  onClick?: () => void
  onHeartClick?: () => void
  timeAgo: string
  title: string | null
  author: string | null
  isLiked: boolean | null
  url: string
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
					{author ? (
						<div className={styles.Time}>
							<img src={timeIcon} alt="time" />
							<span>
								{getTimeAgo(new Date(timeAgo))}
                by {author}
							</span>
						</div>
					) : (
						<Skeleton height={'100%'} width={'50%'} />
					)}
					{title ? (
						<p className={styles.Title}>{title}</p>
					) : (
						<Skeleton height={'100%'} width={'100%'} />
					)}
				</div>
			</a>
			<div className={styles.Liked} onClick={onHeartClick}>
				{typeof isLiked === 'boolean' ? (
					<span>
						{isLiked ? (
							<img src={heartlikedIcon} alt="liked" />
						) : (
							<img src={heartIcon} alt="not liked" />
						)}
					</span>
				) : (
					<Skeleton height={24} width={24} />
				)}
			</div>
		</div>
	)
}

export default Card
