import React from "react";
import "./MainTitle.scss";
import PropTypes from "prop-types";


const MainTitle = React.forwardRef(({title}, ref) => (
    <div className='main'>
        <h1 ref={ref} className='h1'>{title}</h1>
    </div>
));

MainTitle.propTypes = {
    title: PropTypes.string.isRequired,
}


export default MainTitle;