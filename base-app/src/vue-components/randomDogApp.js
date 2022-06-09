import { mount } from 'app3/RandomDogApp'
import { useRef, useEffect } from 'react'

const RandomDogApp = () => {
    const ref = useRef(null)

    useEffect(() =>{
        mount(ref.current)
    }, [])

    return <div ref={ref} />
}

export default RandomDogApp
