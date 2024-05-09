import { css } from "@emotion/react"
import { omit } from "../../utils/omit"
import { DivProps } from "../../global"

export const Card: React.FC<DivProps> = (props) => {
    return (
        <div
            css={css`
                border-radius: 8px;
                padding: 16px;
                display: flex;
                flex-direction: column;
                align-items: center;
            `}
            {...omit(props, "children")}
        >
            {props.children}
        </div>
    )
}