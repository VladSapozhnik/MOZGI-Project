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
        }
    ]

    return (
        <>
            <div className="ticker">
                {ticker.map((item, index) => <div key={item.id} className={item.class}>{item.text}</div>)}
            </div>
        </>
    )
}

export default Ticker