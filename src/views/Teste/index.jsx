import useMutationObserver from "@/hooks/useMutationObserver.mjs"
import { useState } from "react"

export default function Teste() {


    const [line, setLine] = useState([
        { name: "Line Teste" }
    ])

    function handleExecute() {
        const Observer = useMutationObserver(document.body,
            (e => e.textContent.includes('- 5'))
        )

        setLine(line => [
            ...line,
            { name: 'Line Teste - ' + (line.length + 1) }
        ])

        const [finder] = Observer.finder

        console.log(finder)
    }

    return <>
        <button onClick={handleExecute} className="px-4 py-2 rounded border">Click Me</button>

        <div>
            {line.length > 0 && (line.map((e, i) => (<h1 key={i}>{e.name}</h1>)))}
        </div>
    </>

}