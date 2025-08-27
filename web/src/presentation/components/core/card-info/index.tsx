import { cardInfoStyle } from "./styles/card-info.css"

interface PropsCardInfo {
    text: string
}

export const CardInfo = ({text}: PropsCardInfo) => {
    return(
        <div className={cardInfoStyle}>
            <span>{text}</span>
        </div>
    )
}