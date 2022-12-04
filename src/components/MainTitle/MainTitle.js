import React from "react";
import "./MainTitle.scss";


const MainTitle = React.forwardRef((props, ref) => (
    <div className='main'>
        <h1 ref={ref} className='h1'>{props.title}</h1>
    </div>
));


export default MainTitle;