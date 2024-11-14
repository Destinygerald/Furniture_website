import "../App.css"
import { BsFillStarFill } from "react-icons/bs"

function TestimonialCard({ imgSrc, name, rate }) {
	return (
		<div className="testimonial-card">

			<img src="./quote-up.svg" alt="quotes" />

			<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit donec. </span>

			<div>
				<div>
					<img src={imgSrc} alt={name} />
					<span>{name}</span>
				</div>

				<div>
					<span><BsFillStarFill /></span>
					<span>{rate}</span>
				</div>
			</div>
		</div>
	)
}

function Testimonials() {
	return (
		<div className="testimonials">
			<span>Testimonials</span>
			<span>What our Customers say</span>
			<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper nunc in molestie. </span>
			<div className="testimonial-container">
				<TestimonialCard rate="4.3" name="Janne Copper" imgSrc="./Ellipse 1.png" />
				<TestimonialCard rate="3.8" name="John Smith" imgSrc="./Ellipse 25.png" />
				<TestimonialCard rate="4.5" name="Peter Parker" imgSrc="./Ellipse 28.png" />
			</div>
		</div>
	)
}

export default Testimonials;