import './Popup.scss';
import questionText from '../../Question.json';
import {useState} from "react";

function Popup () {
    const [openPopup, setOpenPopup] = useState(false);

    return (
        <>
            <div className={`popup-open ${openPopup === true ? 'active' : ''}`} onClick={() => setOpenPopup(item => item === true ? false : true)}></div>
            <div className={`popup-body ${openPopup === true ? 'active' : ''}`}>
                <ul>
                    <h4 style={{paddingBottom: '10px', textAlign: 'center'}}>Navbar</h4>
                    {questionText.map((item, index) => <li key={index.toString()}><a href={item.href}>{item.title}</a></li>)}
                </ul>
            </div>
        </>
    )
}

export default Popup;