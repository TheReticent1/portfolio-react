import './popup.css';
import '../../../../src/button.css';
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
                    <div className='popup-skills'>
                        {popupData.projects ? <h3 className='h3'>Projects</h3>:null}
                        {
                            popupData.projects ? (popupData.projects.map((project, index) => {
                                return (
                                    <div>
                                    <div>{project.name} | {project.projectDate}</div>
                                    <div>{project.description}</div>
                                    </div>
                                )
                            })): null
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Popup;