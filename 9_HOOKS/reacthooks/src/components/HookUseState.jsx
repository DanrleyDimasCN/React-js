import { useState } from "react";

const HookUseState = () => {
    // 1 - useState
    const [name, setName ] = useState("Danrley");

    return (
        <div>
            {/* 1 - useState */}
            <h2>UseState</h2>
            <p>useState: {name}</p>
        </div>
    )
}