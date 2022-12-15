import './Ticker.scss';

function Ticker() {

    const ticker = [
        {
            id: 1,
            text: 'FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY',
            class: 'ticker-item ticker-item--one'
        },
        {
            id: 2,
            text: 'FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY',
            class: 'ticker-item ticker-item--two'
        },
    ]

    return (
        <>
            <div className="ticker">
                {ticker.map((item) => <div key={item.id} className={item.class}>{item.text}</div>)}
                {/*{ticker.map((item, index, array) =>*/}
                {/*    <div key={item.id} className={item.class}>*/}
                {/*        {array.map(span => <span>{span.text}</span>)}*/}
                {/*    </div>)}*/}
            </div>
        </>
    )
}

export default Ticker