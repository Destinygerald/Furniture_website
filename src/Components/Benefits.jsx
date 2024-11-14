import "../App.css";

function ItemCard({title, imgSrc}) {
	return (
		<div className="b-card">
			<div><img src={imgSrc} alt={title} /></div>

			<div>{title}</div>

			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.
			</div>
		</div>
	)
}

function Benefits() {
	return (
		<div className="benefits">
			<div>
				<div className="b-header-left">
					<span>Benefits</span>
					<span>Benefits when using our services</span> 
				</div>

				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie.
				</div>
			</div>

			<div>
				<ItemCard title="Many Choices" imgSrc="3square.svg" />
				<ItemCard title="Fast and On Time" imgSrc="bag-2.svg" />
				<ItemCard title="Affordable Price" imgSrc="money-tick.svg" />
			</div>
		</div>
	)
}

export default Benefits;