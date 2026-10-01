import { useState } from "react"

export default function useMutationObserver(target, locate = (e => true)) {

    const Observer = {}
    Observer.finder = useState(null)
    Observer.obj = new MutationObserver((MutationList, Self) => {

    })

    return Observer

}