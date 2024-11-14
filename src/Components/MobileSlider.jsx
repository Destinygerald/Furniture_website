import "../App.css"
import { BsX } from "react-icons/bs"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { SliderContextFunction } from "../Context/SliderContext";

function MobileSlider({ open, close }) {

	const { closeSlider } = SliderContextFunction()
	
	const sliderRef = useRef()

	function closeRef(e) {
		if (!sliderRef?.current.contains(e.target)) {
			close()
		}
	}

	useEffect(() => {
		let app = document.querySelector('.app')
		
		if (!app) return;

		let targ = document.querySelector('.mobile-slider')

		if (!targ) return;

		app.addEventListener('pointerdown', (e) => {
			closeRef(e)
		})

		return () => {
			app.removeEventListener('pointerdown', (e) => {
				closeRef(e)
			})
		}
	})

	return (
		<div className={ open ? "mobile-slider" : "mobile-slider-close"} ref={sliderRef} >
			<span className="mobile-slider-exit" onClick={close}> <BsX/> </span>

			<div className="mobile-slider-content">
				<span onClick={close}> <Link to="/"> Home </Link> </span>
				<span onClick={close}> <Link to="/product"> Products </Link> </span>
				<span onClick={close}>Favorites</span>
				<span onClick={close}>About Us</span>
				<span onClick={close}> <Link to="/contact"> Contact Us </Link> </span>
			</div>
		</div>
	)
}

export default MobileSlider;