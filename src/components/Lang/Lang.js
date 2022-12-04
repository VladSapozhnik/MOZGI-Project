import lang from './lang.svg';
import './Lang.scss';
import {useState} from "react";

function Lang() {
    const [openLang, setOpenLang] = useState(false);

    return (
        <>
            <div className="lang" onClick={() => setOpenLang(item => item === false ? true : false)}>
                <img src={lang} alt="lang" />
                <ul className={`lang_list ${openLang === true ? 'active' : ''}`}>
                    <li><a href="#/">EU</a></li>
                    <li><a href="#/">UA</a></li>
                </ul>
            </div>
        </>
    )
}

export default Lang;