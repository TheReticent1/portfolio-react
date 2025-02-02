import './popup.css'
const Popup = ({visible, onHandleClick}) => {
    //early check 
    if(!visible) return null;
    return <>
        <div className="popup-backdrop">
            <div className="popup-content">
                <div className="popup-header">
                    <div className='popup-heading'>Heading <span> | 2025</span></div>
                    <div>
                        <button onClick={() => onHandleClick(false)}>X</button>
                    </div>
                </div>
                <div className="popup-body">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Odio deserunt a iure sapiente ducimus! Dignissimos dicta blanditiis sunt dolorum possimus deserunt 
                        praesentium voluptate cum temporibus, doloremque sequi maiores nesciunt provident?
                    </p>
                </div>
            </div>
        </div>
    </>
}

export default Popup;