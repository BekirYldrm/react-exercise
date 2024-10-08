import { useState, useMemo } from "react"

// useMemo örengine baktik. useMemo fonksiyonun sonucunu döndürür.
const AppMemo = () => {

    const [count, setCount] = useState(0)
    const [textChange, setTextChange] = useState("")

    const largeData = useMemo(() => {
        [...new Array(10000000)].forEach((item) => { })
        return count * 3
    }, [count])

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>arttir</button>
            {largeData}
            <input type="text" onChange={e => setTextChange(e.target.value)} />

        </>
    )
}

export default AppMemo