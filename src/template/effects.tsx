import { useEffect, useState } from 'react'

export const Effects = () => {
	const [count, setCount] = useState(0)
	const [number, setNumber] = useState(0)
	const [isOver, setIsOver] = useState(false)

	useEffect(() => {
		if (number > 0) setCount(count + 1)
        console.log("Effect 1 active")
	}, [number])

	useEffect(() => {
		if (count > 5) setIsOver(true)
        console.log("Effect 2 active")
	}, [count])

	useEffect(() => {
		if (isOver) console.warn('Over')
        console.log("Effect 3 active")
	}, [isOver])

	const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setNumber(+e.target.value)
	}

    console.log("render active")

	return (
		<div>
			F12押下、コンソールを見よう
            <br></br>
			<input value={number} onChange={onChange} type="number" />
		</div>
	)
}
