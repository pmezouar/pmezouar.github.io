import { Link } from "react-router-dom";
import "./button.css";

interface ButtonProps {
    link_url: string;
    class_name: string;
    title: string;
    icon: string;
}
function Button({ link_url, class_name, title, icon }: ButtonProps) {
    return (
        <Link to={link_url} className={class_name}>
            {title} <i className={icon}></i>
        </Link>
    )
}

export default Button
