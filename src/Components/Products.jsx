import "../App.css";

function ProductsCard({ imgSrc, item, itemName, price, desc }) {
	return (
		<div className="product-card">
			<img src={imgSrc} alt={item} />
			<span> {item} </span>
			<span> {itemName} </span>
			<span> {desc} </span>
			<span> ${price} </span>
		</div>
	)
}

function Products() {
	return (
		<div className="products">
			<span>Product</span>
			<span>Our popular product</span>
			<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit donec cons.</span>
			
			<div>
				<ProductsCard imgSrc="img (7).png" item="Shelf" itemName="Wooden Bookshelf" price="65.00" desc="Combination of wood and wood" />
				<ProductsCard imgSrc="img (4).png" item="Chair" itemName="White Aesthetic Chair" price="63.47" desc="Combination of wood and wood" />
				<ProductsCard imgSrc="img (5).png" item="Lamp" itemName="Bardono Smart Lamp" price="62.23" desc="Combination of wood and wood" />
				<ProductsCard imgSrc="img (6).png" item="Sofa" itemName="Sofa Empuk Banget" price="58.39" desc="Combination of wood and wood" />
			</div>
		</div>
	)
}

export default Products;