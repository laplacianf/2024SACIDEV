import { css } from "@emotion/react"
import { EventHandler } from "../../utils/event"
import { useEffect, useState } from "react"
import { CenterBox } from "./CenterBox"

export const ModalContainer: React.FC = () => {
    const [ content, setContent ] = useState<React.ReactNode | null>(null)

    useEffect(() => {
        EventHandler.addEventListener("modal", (content: React.ReactNode | null) => {
            setContent(content)
            if (content === null) document.body.style.overflow = "auto"
            else document.body.style.overflow = "hidden"
        })
    }, [])

    if (content === null) return <></>

    return (
        <CenterBox
            css={css`
                position: fixed;
                top: 0;
                left: 0;
                background-color: #000000C0;
                width: 100%;
                height: 100%;
                z-index: 100;
            `}
            onClick={() => EventHandler.trigger("modal", null)}
        >
            {content}
        </CenterBox>
    )
}