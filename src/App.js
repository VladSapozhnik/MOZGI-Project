import {createRef} from "react";
import {
    Routes,
    Route,
} from "react-router-dom";

import './fonts/stylesheet.scss';

import questionText from './Question.json'

import Circle from "./components/Circle/Circle";
import Question from "./components/Question/Question";
import WheelShow from "./components/WheelShow/WheelShow";
import Lang from "./components/Lang/Lang";
import Popup from "./components/Popup/Popup";
import Ticker from "./components/Ticker/Ticker";
import MainTitle from "./components/MainTitle/MainTitle";
import HeadLogo from "./components/HeadLogo/HeadLogo";

function App() {
    const header = createRef();

    const routeList = [
        {
            "id": 0,
            "title": "full-cycle event agency",
            "href": "/",
        },
        ...questionText
    ]

    function HandlerMouseMove (e) {
        if (window.innerWidth > 768) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;

        let h1 = header.current;
        h1.style.transform = 'translate(' + x * 50 + 'px, -' + y * 50 + 'px)';
        }
    }


  return (
    <div className="App" onMouseMove={e => HandlerMouseMove(e)}>
        <Popup/>
        <HeadLogo/>
        <Lang/>
        <WheelShow/>
        <Ticker/>
        <Circle/>
        <Routes>
            {routeList.map(item => <Route exact key={item.id} path={item.href} element={<MainTitle ref={header} title={item.title} />} />)}
        </Routes>
        {questionText.map(item => <Question title={item.title} href={item.href} key={item.id} className={item.className}/>)}
    </div>
  );
}

export default App;
