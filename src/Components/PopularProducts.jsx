import "../App.css"
import ProductCard from "./ProductCard"
import { useLocalStorage } from "../Hooks/UseLocalStorage"

function PopularProducts () {


	const [ likedItems, setLikedItems ] = useLocalStorage("FAVORITES", [])

	return (
		<div className="popular-products">
			<div>
				<div>
					<span>Trending Products</span>
					<span>Our most popular products based on sales. Updated hourly</span>
				</div>

				<ul>
					<li>All</li>
					<li>Chairs</li>
					<li>Tables</li>
					<li>Wardrobes</li>
					<li>Shelves</li>
				</ul>
			</div>

			<div>
				{
					Array.from(Array(9)).map((itm, i) => (
						<ProductCard key={'popular-itm ' + i} likedItems={likedItems} setLikedItems={setLikedItems} />
					))
				}
			</div>
		</div>
	)
}

export default PopularProducts