import { FC } from "react"

interface SpannedTextProps {
    text: string
    parentClassName: string
}

export const SpannedText: FC<SpannedTextProps> = ({
    text,
    parentClassName
}) => {

    const splittedText = text.split('//')

    if (splittedText.length < 2) {
        return <p className={parentClassName}>{text}</p>
    }

    return (
        <div className={parentClassName}>
            {splittedText.map((t, index) => {
                if (index % 2 == 0) {
                    return t
                }
                return <span key={t + index}>{t}</span>
            })}
        </div>
    )
}