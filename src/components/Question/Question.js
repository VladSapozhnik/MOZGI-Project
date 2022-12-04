import './Question.scss'
import {Link} from "react-router-dom";

function Question(props) {

    return (
        <>
            <Link className={'link ' + props.className} data-content={props.title} to={props.href}>{props.title}</Link>
        </>
    )
}

export default Question;