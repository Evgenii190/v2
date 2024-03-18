import s from "./BlockTitle.module.scss";

export default function BlockTitle({ children, style }) {
    return (
        <h2 className={s.title} style={...style}>
            {children}
        </h2>
    );
}
