import './popup.css'
const Popup = ({visible, onHandleClick, popupData}) => {
    //early check 
    if(!visible) return null;
    return <>
        <div className="popup-backdrop">
            <div className="popup-content">
                <div className="popup-header">
                    <div className='popup-heading'>{popupData.heading} <span> | {popupData.year}</span></div>
                    <div>
                        <button onClick={() => onHandleClick(false, null)}>X</button>
                    </div>
                </div>
                <div className="popup-body">
                    <div>
                        <p>{popupData.popupDescription}</p>
                    </div>
                    <div className='popup-skills'>
                        {popupData.skills.length ? <h3 className='h3'>What I know.</h3>:<span></span>}
                        {
                            popupData.skills.length ? (popupData.skills.map((skill, index) => {
                                return <button key={`skill_id_${index}`}>{skill.skillName}</button>
                            })): <span></span>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Popup;