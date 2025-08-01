import { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'

export const EffectForever = () => {
	const [flgStop, setFlgStop] = useState(false)
	const [list, setList] = useState([1, 2, 3, 4, 5, 6])

	const changeListItem = (index: number = 0, val: number = 9) => {
		list[index] = val
		setList([...list])
	}

	const stop = () => {
		setFlgStop(true)
		changeListItem()
	}

	useEffect(() => {
		if (flgStop) return
		console.warn('Effect forever' + JSON.stringify(list))
		list[list.length - 1] += 1
		setList([...list])
	}, [list])

	useEffect(() => {
		console.log('Effect once with number' + JSON.stringify(list))
	}, [list[0]])

	useEffect(() => {
		console.log('Effect once' + JSON.stringify(list))
	}, [])

	return (
		<div>
			F12押下、コンソールを見よう
			<p>{JSON.stringify(list)}</p>
			<Button onClick={stop}>永遠中止</Button>
		</div>
	)
}
