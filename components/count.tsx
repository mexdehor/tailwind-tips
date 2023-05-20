'use client'
import React from 'react'

export const Count = () => {
	const [count, setCount] = React.useState(0)

	return (
		<button
			type="button"
			className="p-2 text-white bg-blue-600 rounded-md"
			onClick={() => setCount((count) => count + 1)}
		>
			Count is {count}
		</button>
	)
}
