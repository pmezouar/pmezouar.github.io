import { Link } from "react-router-dom";
import "./button.css";

function Button(props) {
    return (
        <Link to={props.link_url} className={props.class_name}>
            {props.title} <i className={props.icon}></i>
        </Link>
    )
}

export default Button
