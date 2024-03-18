import s from "./ButtonRed.module.scss";

export default function ButtonRed({
    children,
    style,
    onClick,
    isSubmit = false,
    disabled = false,
}) {
    return (
        <button
            type={isSubmit ? "submit" : ""}
            style={{ ...style }}
            className={s.button}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
