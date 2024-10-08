import React from "react"

const Text: React.FC<{ name: string }> = ({ name }) => {
    return (
        <div>
            {name}
        </div>
    )
}

export default Text