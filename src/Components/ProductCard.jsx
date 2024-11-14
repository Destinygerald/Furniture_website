import "../App.css"
import { BsHeart, BsHeartFill, BsDash, BsPlus } from "react-icons/bs"
import { useState } from "react";

function ProductCard ({ imgSrc, itemName, itemPrice, itemGroup, likedItems, setLikedItems }) {
	
	const [ liked, setLiked ] = useState(false);
	const [ carted, setCarted ] = useState(0);

	function toggleLiked (e) {

		let newItem = e.target.parentElement.getAttribute('name');

		if ( liked === true ) {
			setLiked(false)
			
			

			let recent = likedItems.filter(itm => (
				itm != newItem
			))

			// console.log(recent)

			setLikedItems(recent)

		} else {
			setLiked(true)
			setLikedItems([...likedItems, newItem])
		}

		// console.log(e.target.parentElement.getAttribute('name'))
	}

	function toOne () {
		if (carted == 0) {
			setCarted(1)
		}
	}

	function increase () {
		setCarted((carted) => carted + 1)
	}

	function decrease () {
		setCarted((carted) => carted - 1)
	}	

	return (
		<div className="products-item" name={itemName}>
			<div>
				<img src={imgSrc} alt={itemName} />
			</div>

			<div>

				<div>
					<span>{ itemName || "----" }</span>
					<span>{ itemGroup || "----" }</span>
				</div>

				<div>
					<span>$ { itemPrice || "----" }</span>
					{
						carted <= 0
						?
						<div className="products-cart-btn" onClick={() => setCarted(1)}>
							Add to Card
						</div>

						:

						<div className="products-cart-btn2">
							<span onClick={() => increase()}> <BsPlus /> </span>
							<span> {carted} </span>
							<span onClick={() => decrease()}> <BsDash/> </span>
						</div>
					}
				</div>

			</div>

			<span className="products-item-btn" onClick={toggleLiked}>
				{ liked ? <BsHeartFill /> : <BsHeart /> }
			</span>
		</div>
	)
}

export default ProductCard