
import Card from '../../components/Card'
import Select from '../../components/Select'
const Home = () => {

	return <div className='container'>
		<Select onSelect={(e)=>console.log(e)}/>
		<Card timeAgo='2 hours' author='juan' title='vklsdnh' isLiked={false}/>
	</div>
}

export default Home
