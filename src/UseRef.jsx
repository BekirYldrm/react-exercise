import { useRef } from "react";


// UseRef Kullanımını ogrendik.
const AppRef = () => {
    const inputRef = useRef()

    const focus = () => {
        inputRef.current.focus()
    }
    console.log(inputRef.current, "inputRef");
    
    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={focus}> focus </button>
        </>

    )
}

export default AppRef