import React, { useCallback, useState } from "react"
//useCallback ve React.memo örnegklerini kullandik.
const ChildComponent = React.memo(({ increment }) => {
    console.log("render !!!");
    return (
        <>
            <button onClick={increment}>ARTTIR</button>

        </>)
})

const AppCallback = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")

    const increment = useCallback(() => setCount(count + 1),[text])

    return (
        <>
            <div>{count}</div>
            <ChildComponent increment={increment} />
            <input type="text"  onChange={e => setText(e.target.value)}/>
        </>
    )
}

export default AppCallback