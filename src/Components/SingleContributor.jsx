import image1 from '../assets/pasta.jpg'
function SingleContributor(props) {
  return (
	<div>
		<img  src={image1}/>
		<h3>{props.name}</h3>
		<p>{props.desc}</p>
		<button>Github</button>
	</div>
  )
}

export default SingleContributor