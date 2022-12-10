import {createRef} from "react";
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import {useTransition, animated} from 'react-spring';

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
    const preloader = createRef();

    const location = useLocation();



    const transition = useTransition(location, {
        from: {
            opacity: 0,
            delay: 1000,
        },
        enter: {
            opacity: 1,
            delay: 1000,
        },
        leave: {
            opacity: 0,
            delay: 1000,
        },
    });

    const routeList = [
        {
            "id": 0,
            "title": "full-cycle event agency",
            "href": "/",
        },
        ...questionText
    ]

    function HandlerMouseMove(e) {
        if (window.innerWidth > 768) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;

            let h1 = header.current;
            h1.style.transform = 'translate(' + x * 50 + 'px, -' + y * 50 + 'px)';
        }
    }


    function callPreloader () {
        const preloaderClass = preloader.current.classList;

        preloaderClass.add('preloader--animate');

        if (preloaderClass.contains('preloader--animate')) {
            setTimeout(() => {
                preloaderClass.remove('preloader--animate');
            }, 2000)
        }
    }


    return (
        <div className="App" onMouseMove={e => HandlerMouseMove(e)}>
            <div className="preloader"></div>
            <Popup/>
            <HeadLogo callPreloader={callPreloader}/>
            <Lang/>
            <WheelShow/>
            <Ticker/>
            <Circle/>
            {transition((props, item) => (
                <animated.div style={props}>
                    <Routes location={item.pathname}>
                        {routeList.map(item => <Route exact key={item.id} path={item.href}
                                                      element={<MainTitle ref={header} title={item.title}/>}/>)}
                    </Routes>
                </animated.div>
            ))
            }
            {/*{routeList.map(item => <Route exact key={item.id} path={item.href} element={<MainTitle ref={header} title={item.title} />} />)}*/}
            {questionText.map(item => <Question callPreloader={callPreloader} title={item.title} href={item.href} key={item.id}
                                                className={item.className}/>)}
            <div ref={preloader} className="preloader"></div>
        </div>
    );
}

export default App;
