import "./popup.css";
const Popup = ({visible, popupData, onDataChange}) => {
    if(!visible) return null; //early check
    return <>
        <div className="popup-backdrop" onClick={() => onDataChange(false, null)}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                <div className="popup-content">
                    <div className="popup-header">
                        <div>
                            {popupData.heading} <span>| {popupData.year}</span>
                        </div>    
                        <div>
                            <button onClick={() => onDataChange(false, null)}>X</button>
                        </div>
                    </div>
                    <div className="popup-body">
                        <p>{popupData.discription}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
}

export default Popup;