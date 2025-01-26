import "./cards.css";

const Cards = ({cardsConfig}) => {
    return <>
        <div className="card-container">
            <div className="card-heading">
                <div className="heading">{cardsConfig.heading}</div>
                <div className="logo">{cardsConfig.logo ? <img src={cardsConfig.logo} alt="card-icon"/> : 'card-icon'}</div>
            </div>
            <div className="card-body">
                <div className="card-image">
                    <img src={cardsConfig.cardImage} alt="card-img"/>
                </div>
                <div className="card-description">
                    <p>{cardsConfig.descriptionHeading}</p>
                    <label className="description">{cardsConfig.description}</label>
                </div>
            </div>
         </div>
    </>
}

export default Cards;