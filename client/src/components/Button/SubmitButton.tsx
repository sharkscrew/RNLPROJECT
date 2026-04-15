import type { FC } from "react"
import { Link } from "react-router-dom"

interface SubmitButtonProps {
    label: string
    path?: string
    newClassName?: string
    className?: string
}
const SubmitButton: FC<SubmitButtonProps> = ({
    label,
    path,
    newClassName,
    className
}) => {
    return (
        <>
            <Link
                to={path}
                className={` {${newClassName ? newClassName : ` px-4 py-3 bg-green-600 hover:bg-green-700 text-white  text-sm font-medium cursor-pointer rounded-lg shadow-lg ${className} `
                    }`}
            >
                {label}
            </Link>
        </>
    )
}

export default SubmitButton     