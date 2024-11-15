import "../App.css"
import { BsSearch } from "react-icons/bs"

function FrontTop() {
	return (
		<div className="front-top">
			<div className="front-header">Discover Furniture With High Quality Wood <img src="./stars.svg" alt="stars" /> </div>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor consectetu orem ipsum dolor sit amet, consectetur adipiscing elit donec.
				<img src="squibble.svg" alt="squibble" className="squibble" />
			</div>

			<div>
				<div className="search-container">
					<BsSearch className="search-icon" />
					<input type="text" placeholder="Search Property" />
					<button>Search</button>
				</div>
				<img src="./img (1).webp" alt="bck" />
			</div>
		</div>
	)
}

export default FrontTop;