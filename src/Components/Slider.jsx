import "../App.css"
import { BsX } from "react-icons/bs"
import { useEffect, useRef } from "react"
import { SliderContextFunction } from "../Context/SliderContext";

function Slider() {

	const sliderRef = useRef()

	const { open, closeSlider } = SliderContextFunction()

	let app = document.querySelector('.app');

	function sliderClose() { 

		if (!sliderRef.current.contains(app)) {
			closeSlider()
		}
	}


	useEffect(() => {
		
		if (!app) return;

		app.addEventListener('pointerdown', closeSlider)

		return (() => {
			app.removeEventListener('pointerdown', closeSlider)
		})
	})

	return (
		<div className={ open ? "slider" : "slider-closed"} ref={sliderRef} >
			<span className="slider-exit" onClick={() => {closeSlider()}}> <BsX /> </span>
			<div className="slider-header">
				<span>Cart-Items</span>
			</div>
		</div>
	)
}

export default Slider