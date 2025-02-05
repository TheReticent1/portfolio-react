import { useState } from 'react';
import Popup from '../../shared/components/popup/popup';
import './about-me.css';
import '../../../src/button.css';
import { timelineObject } from '../../shared/constants/shared.constant'

const timelineData = timelineObject;
const AboutMe = () => {
    const [visible, setVisible] = useState(false);
    const [cardData, setCardData] = useState(null);
    const handleClick = (val, cardDetails) => {
        setVisible(val);
        setCardData(cardDetails);
        document.body.style.overflowY = val ? 'hidden' : 'auto';
    }
    return<>
        <div className="container">
            <div className="content">
                <div className="introduction">
                    <div className="heading gradient">Code Parth</div>
                    <div className="sub-heading">Full Stack Developer</div>
                </div>
                <div className="work">
                    <div className="work-heading">Timeline</div>
                    <div className="timeline">
                        <ul>
                            {
                                timelineData.map((card, index) => {
                                    return <li key={index}>
                                            <div className="timeline-card" onClick={() => handleClick(true, card)}>
                                                <div className='tc-heading'>{card.heading} <span> | {card.year}</span></div>
                                                <div className="tc-discription">
                                                    {card.description.length ? (card.description.map((currD, index) => {
                                                        return <div key={`desc_id_${index}`} className='points'>{currD}</div>
                                                    })) : null}
                                                </div>
                                                <div className='skills'>
                                                    {
                                                        card.skills.length ? (card.skills.map((skill, index) => {
                                                            return <button key={`skill_id_${index}`} className={`button ${skill.class}`}>{skill.skillName}</button>
                                                        })): null
                                                    }
                                                </div>
                                            </div>
                                        </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Popup visible={visible} onHandleClick={handleClick} popupData={cardData}/>
    </>
}

export default AboutMe;