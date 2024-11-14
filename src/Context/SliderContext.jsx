import { useState, useContext, createContext } from "react"

const SliderContext = createContext()

export function SliderContextFunction() {
	return (
		useContext(SliderContext)
	)
}

export function SliderContextProvider({children}) {

	const [ open, setOpen ] = useState(false)

	function closeSlider() {
		setOpen(false)
	}

	function toggleSlider() {
		setOpen(!open)
	}

	return (
		<SliderContext.Provider value={{open, closeSlider, toggleSlider}}>
			{children}
		</SliderContext.Provider>
	)
}