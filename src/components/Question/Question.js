import './Question.scss'
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


function Question({className, href, title, callPreloader}) {

    return (
        <>
            <Link className={'link ' + className} onClick={callPreloader} data-content={title} to={href} disabled>{title}</Link>
        </>
    )
}

Question.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    callPreloader: PropTypes.func.isRequired
}

export default Question;