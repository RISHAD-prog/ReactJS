import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}|HeroToyZ`;
    }, [title])
}

export default useTitle;