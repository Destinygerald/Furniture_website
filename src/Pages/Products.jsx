import "../App.css"
import PopularProducts from "../Components/PopularProducts"
import NewProducts from "../Components/NewProducts"

function Products () {
	return (
		<div className="products-page">
			<PopularProducts />
			<NewProducts />
		</div>
	)
}

export default Products