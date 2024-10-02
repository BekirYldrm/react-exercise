import  { useEffect, useState } from 'react'

// Bu ornekte useEffect konusuna baktik.

const AppEffect = () => {
    const [name, setName] = useState("react")

    useEffect(() => {
        setTimeout(() => {
            setName("React guncellendi....")
        }, 4000)
    }, [])

    return (
        <>
            {name}
        </>
    )
}

export default AppEffect