import { useState } from 'react'

const useCounter = (initialValue: number) => {

  const [count, setCount] = useState(initialValue)

  return [count, setCount]
}

export default useCounter