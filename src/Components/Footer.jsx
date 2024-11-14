import "../App.css"
import { useLocation } from "react-router-dom";

function Footer() {

	const location = useLocation()

	// console.log(location.pathname)

	return (
		<div className={ location.pathname != "/contact" ?  "footer" : "footer-disappear"}>
			<div>
				<span>Join with me to get special discount</span>
				<button>Learn More</button>
			</div>

			<div />

			<div className="footer-content">
				<div>
					<img src="./logo.svg" alt="logo" />
					<span>Lalasia digital agency that help you make better experience iacrulis cras in</span>
				</div>

				<div>
					<ul>
						<li>Product</li>
						<li>New Arrivals</li>
						<li>Best Selling</li>
						<li>Home Decor</li>
						<li>Kitchen Set</li>
					</ul>

					<ul>
						<li>Services</li>
						<li>Catalog</li>
						<li>Blog</li>
						<li>FaQ</li>
						<li>Pricing</li>
					</ul>

					<ul>
						<li>Follow Us</li>
						<li>Facebook</li>
						<li>Instagram</li>
						<li>Twitter</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer;