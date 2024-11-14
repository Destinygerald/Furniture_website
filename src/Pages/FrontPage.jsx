import "../App.css";
import FrontTop from "../Components/FrontTop"
import Benefits from "../Components/Benefits"
import Products from "../Components/Products"
import Products2 from "../Components/Products2"
import Testimonials from "../Components/Testimonials"
import Articles from "../Components/Articles"
// import Footer from "../Components/Footer"


function FrontPage() {
	return (
		<div className="front-page">
			<FrontTop />
			<Benefits />
			<Products />
			<Products2 />
			<Testimonials />
			<Articles />
			{/*<Footer />*/}
		</div>
	)
}

export default FrontPage;