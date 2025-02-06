import { useState } from "react";
import Popup from "../../shared/components/popup/popup";
import "./about-me.css";
import "../../skills-btn.css";
import { timeLineData } from "../../shared/constants/data.const";

const timelineData = timeLineData;

const AboutMe = () => {
    const [card, setCard] = useState();
    const [visible, setVisible] = useState(false);
    const handleClick = (val, card) => { 
        document.body.style.overflow = val ? 'hidden' : 'auto';
        setVisible(val);
        setCard(card);
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
                    <div className="timeline" key="time1">
                        <ul>
                            {
                                timelineData.map((item, index) => {
                                    return (
                                        <li key={item.year}>
                                            <div className="timeline-card" onClick={() => handleClick(true, item)} title="more details...">
                                                <div className="tc-header">
                                                    <div>
                                                        {item.heading} <span>| {item.year}</span>
                                                    </div>
                                                </div>
                                                <div className="tl-discription">
                                                    {item.discription.map((item, index) => {
                                                        return <div key={`desc_id_${index}`} className="points"><span className="dot"></span>{item}</div>
                                                    })}
                                                </div>
                                                <div className="tl-skills">
                                                    {item.skills ? 
                                                        item.skills.map((skill, index) => {
                                                            return <button key={`skills_id_${index}`}className={`button ${skill.class}`}>{skill.skillName}</button>
                                                        })
                                                    : null}
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <Popup visible={visible} popupData={card} onDataChange={handleClick}/>
    </>
}

export default AboutMe;