import "../App.css"
import { useState, useRef, useEffect } from "react"

function Contact () {

	const [ contactInfo, setContactInfo ] = useState({
		email: '',
		phone: '',
		message: ''
	})

	const messageRef = useRef()

	function handleChange(e) {
		setContactInfo({ ...contactInfo, [e.target.name] : e.target.value })
	}

	function handleSubmit(e) {
		e.preventDefault()

		if (!contactInfo.email || !contactInfo.phone || !contactInfo.message) {
			// messageRef.current.classList.remove('no-message')
			
				messageRef.current.classList.remove('no-message')
				messageRef.current.classList.add('contact-message')
				
				setTimeout(() => {
					messageRef.current.classList.remove('contact-message')
					messageRef.current.classList.add('no-message')
				},1500)	
			

		}
	}

	return (
		<div className="contact">
			
			<div>Contact Us</div>

			<form onSubmit={handleSubmit}>
				<input type="email" placeholder="Email" name="email" value={contactInfo.email} onChange={handleChange} />
				<input type="phone" placeholder="Phone Number" name="phone" value={contactInfo.phone} onChange={handleChange} />
				<textarea placeholder="Message" name="message" value={contactInfo.message} onChange={handleChange} />

				<button type="submit">Submit</button>
			</form>

			<div className="no-message" ref={messageRef}>
				Incomplete 
			</div>
		</div>
	)
}

export default Contact;