import "../App.css"
import { BsPerson } from "react-icons/bs"
import { BiCart } from "react-icons/bi"
import { AiOutlineMenu } from "react-icons/ai"
import Slider from "./Slider"
import MobileSlider from "./MobileSlider"
import { SliderContextFunction } from "../Context/SliderContext.jsx";
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

function Navbar() {

	const [ selected, setSelected ] = useState('home');
	const [ open, setOpen ] = useState(false)

	const { toggleSlider, closeSlider } = SliderContextFunction()

	const navigate = useNavigate()

	function handleClick (arg) {
		if (arg == 'home'){
			navigate('/')
		} else {
			navigate(arg)
		}
		closeSlider
		setSelected(arg)
	}

	function openSlider() {
		setOpen(true)
		// console.log('bnm,')
	}

	function closeSlidr() {
		setOpen(false)
	}

	return (
		<div className="navbar">
			<div className="logo"><img src="./logo.svg" alt="logo"/></div>

			<ul>
				<li className={selected === "home" ? "" : "" } onClick={() => handleClick('home')}>Home</li>
				<li className={selected === "product" ? "" : "" } onClick={() => handleClick('product')}>Product</li>
				<li>Favourites</li>
				<li className={selected === "contact" ? "" : ""} onClick={() => handleClick('contact')} >Contact Us</li>
				<li>About us</li>
			</ul>

			<div className="menu" onClick={() => openSlider()}> <AiOutlineMenu /> </div>

			<div className="navbar-icons">
				<span onClick={() => {toggleSlider()}}> <BiCart /> </span>
				<span> <BsPerson /> </span>
			</div>
			
			<MobileSlider open={open} close={closeSlidr} />
			
			<Slider />
			
		</div>
	)
}

export default Navbar;
