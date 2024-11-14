import { useState, useEffect } from "react"

export function useLocalStorage (key, initialValue) {
	
	const [ value, setValue ] = useState(() => {
		const jsonValue = JSON.parse(localStorage.getItem(key))

		if ( jsonValue == null ) {
			if ( typeof initialValue == 'function' ) {
				return (initialValue)()
			}	else {
				return initialValue;
			}
		} else {
			return jsonValue
		}
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}