import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'

import useEventListener from './useEventListener'

type SetValue<T> = Dispatch<SetStateAction<T>>

function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {

	const readValue = (): T => {
		if (typeof window === 'undefined') {
			return initialValue
		}

		try {
			const item = window.localStorage.getItem(key)
			return item ? (parseJSON(item) as T) : initialValue
		} catch (error) {
			console.warn(`Error reading localStorage key “${key}”:`, error)
			return initialValue
		}
	}

	const [storedValue, setStoredValue] = useState<T>(readValue)

	const setValue: SetValue<T> = value => {
		if (typeof window == 'undefined') {
			console.warn(
				`“${key}” cannot be saved in localStorage because the window is not available.`,
			)
		}

		try {
			const newValue = value instanceof Function ? value(storedValue) : value
			window.localStorage.setItem(key, JSON.stringify(newValue))
			setStoredValue(newValue)
			window.dispatchEvent(new Event('local-storage'))
		} catch (error) {
			console.warn(`Error setting localStorage key “${key}”:`, error)
		}
	}

	useEffect(() => {
		setStoredValue(readValue())
	}, [])

	const handleStorageChange = useCallback(() => {
		setStoredValue(readValue())
	}, [])

	useEventListener('storage', handleStorageChange)

	useEventListener('local-storage', handleStorageChange)

	return [storedValue, setValue]
}

export default useLocalStorage

const parseJSON = <T>(value: string | null): T | undefined =>{
	try {
		return value === 'undefined' ? undefined : JSON.parse(value ?? '')
	} catch (error) {
		console.log('parsing error on', { value })
		return undefined
	}
}